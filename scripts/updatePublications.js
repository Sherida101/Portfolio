const fs = require("fs");
const fetch = require("node-fetch");
const { DOMParser } = require("xmldom");

const ORCID_ID = "0000-0002-4348-7387";
const BASE_URL = `https://pub.orcid.org/v3.0/${ORCID_ID}/works`;

async function getFullWorkDetails(putCode) {
  const url = `https://pub.orcid.org/v3.0/${ORCID_ID}/work/${putCode}`;
  const res = await fetch(url, {
    headers: { Accept: "application/xml" },
  });
  return await res.text();
}

async function updatePublications() {
  const res = await fetch(BASE_URL, {
    headers: { Accept: "application/xml" },
  });

  const xmlText = await res.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  const workSummaries = xmlDoc.getElementsByTagName("work:work-summary");

  const parsedPubs = await Promise.all(
    Array.from(workSummaries)
      .slice(0, 10) // Limit to 10
      .map(async (work) => {
        const title =
          work.getElementsByTagName("common:title")[0]?.textContent ||
          "Untitled";
        const pubType =
          work.getElementsByTagName("common:work-type")[0]?.textContent ||
          "Publication";
        const year =
          work.getElementsByTagName("common:year")[0]?.textContent || "N/A";
        const putCode = work.getAttribute("put-code");

        let doi = "";
        let url = "";
        let journal = "";
        let hasCoAuthors = false;

        try {
          const detailXML = await getFullWorkDetails(putCode);
          const detailDoc = new DOMParser().parseFromString(
            detailXML,
            "application/xml",
          );

          const contributors =
            detailDoc.getElementsByTagName("common:contributor");
          if (contributors.length > 0) hasCoAuthors = true;

          const externalIds =
            detailDoc.getElementsByTagName("common:external-id");
          for (let id of externalIds) {
            if (
              id.getElementsByTagName("common:external-id-type")[0]
                ?.textContent === "doi"
            ) {
              doi =
                id.getElementsByTagName("common:external-id-value")[0]
                  ?.textContent || "";
            }
          }

          journal =
            detailDoc.getElementsByTagName("common:journal-title")[0]
              ?.textContent || "";
          url =
            detailDoc.getElementsByTagName("common:url")[0]?.textContent ||
            (doi ? `https://doi.org/${doi}` : "#");
        } catch (err) {
          console.warn(
            `⚠️ Failed to fetch full record for put-code ${putCode}`,
          );
        }

        return {
          id: putCode,
          name: title,
          type: pubType,
          url,
          description: journal,
          createdAt: year !== "N/A" ? `${year}-01-01` : "N/A",
          note: hasCoAuthors ? "This publication includes co-authors." : "",
        };
      }),
  );

  const filePath = "./src/shared/opensource/publications.json";
  const oldPubs = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath)).data
    : [];

  const oldTitles = oldPubs.map((pub) => pub.name);
  const newPubs = parsedPubs.filter((pub) => !oldTitles.includes(pub.name));

  if (newPubs.length > 0) {
    console.log(`🔄 ${newPubs.length} new publication(s) found. Updating...`);
    const jsonData = {
      lastFetched: new Date().toISOString(),
      data: parsedPubs,
    };
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
    console.log("✅ publications.json updated.");
  } else {
    console.log("📚 No new publications found.");
  }
}

updatePublications();
