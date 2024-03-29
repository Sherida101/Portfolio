/* eslint-disable */

/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aaliyah Providence's Portfolio",
  description:
    "Aaliyah Providence is a recent Software Engineer graduate who has attained skills in website development, mobile application development and project management. Driven by passion, she takes pride in providing the best service and high quality software as possible.",
  og: {
    title: "Aaliyah Providence's Portfolio",
    type: "website",
    url: "https://sherida101.github.io/Portfolio",
  },
};

//Home Page
const greeting = {
  title: "Aaliyah Providence",
  logo_name: "AaliyahProvidence",
  currentJobStatus: "Junior Software Developer",
  subTitle:
    "Full-stack developer with specialties in mobile and website application development as well as software design, project management and software testing.",
  subTitle2:
    "A quick learner with effective time management and efficient multi-tasking skills. Strong work ethic in a team or individual settings to drive product success and process efficiency as well as proficiency.",
  cvLink:
    "https://drive.google.com/file/d/11Tqv1aLKsZV7091TQAeEKqCr9CM8-uxU/view?usp=sharing",
  portfolio_repository: "https://github.com/Sherida101/Portfolio",
  githubProfile: "https://github.com/Sherida101",
  footer: "ASP's Portfolio 2022-2024 | Made with ReactJs",
};

const socialMediaLinks = [
  /* Social Media links */
  {
    name: "Github",
    link: "https://github.com/Sherida101",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aaliyah-providence-0355b321a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCobAZ9eizOU77HaEoLn0jHA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:sherida567@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

// Get icons from: https://icon-sets.iconify.design/
const skills = {
  data: [
    // Full-stack Development
    {
      title: "Full-stack Development",
      fileName: "FullStackDevImg",
      skills: [
        "⚡ Build responsive websites using front-end languages and frameworks HTML5, CSHTML, CSS, JavaScript, Bootstrap",
        "⚡ Create application back-end in Node, Django, .NET & Python",
        "⚡ Manage database systems by fetching and writing data to them",
        "⚡ Maintain version control of projects via Git and GitHub",
        "⚡ Experience work on virtual machine instances with ssh",
        "⚡ Have knowledge of the creation and consumption of API web services like REST and SOAP services",
        "⚡ Have in-depth knowledge and understanding of how to build prototype design and UI /UX design",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "logos:css-3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "cib:jquery",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "CSHTML",
          fontAwesomeClassname: "dashicons:html",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#7E13F8",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            color: "#05930C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PythonFlask",
          fontAwesomeClassname: "bxl:flask",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    // Database Management
    {
      title: "Database Management",
      fileName: "DBManagementImg",
      skills: [
        "⚡ Visualise and analyse data",
        "⚡ Ensure that data is collected and managed in the database",
        "⚡ Understand the business of the company",
        "⚡ Eye for detail and accuracy",
        "⚡ In-depth understanding of NoSQL and SQL",
        "⚡ Adequate knowledge of 'relational database management systems' (RDBMS), 'object oriented database management systems' (OODBMS) and XML database management systems",
        "⚡ Create query definitions that allow data to be extracted",
        "⚡ Design and prepare reports for management",
        "⚡ Set up and test database and data handling systems",
        "⚡ Develop protocols for data processing",
      ],
      softwareSkills: [
        {
          skillName: "SQLite",
          fontAwesomeClassname: "vscode-icons:file-type-sqlite",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql-icon",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MSSQL",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "cib:apache-spark",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Apache Hive",
          fontAwesomeClassname: "simple-icons:apachehive",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Apache Hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // Graphic Design
    {
      title: "Graphic Design",
      fileName: "GraphicDesignImg",
      skills: [
        "⚡ Design attractive user interface for mobile applications",
        "⚡ Build and customise logo designs, banners, flyers, menus, nutrition facts labels and decals",
      ],
      softwareSkills: [
        {
          skillName: "GIMP",
          fontAwesomeClassname: "devicon:gimp",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "KolourPaint",
          fontAwesomeClassname: "bx:paint",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "PosterMyWall",
          fontAwesomeClassname: "ic:outline-design-services",
          style: {
            color: "#87CEEB",
          },
        },
      ],
    },
    // Mobile application development
    {
      title: "Mobile Application Development",
      fileName: "MobileAppDevelopmentImg",
      skills: [
        "⚡ Build high-quality mobile user interface designs",
        "⚡ Develop cross-platform applications which can be used on Apple iOS, Android and web",
        "⚡ Integrate security measures, database management and memory allocation in app development",
        "⚡ Competent in web development languages",
        "⚡ Analyse business capabilities to optimise how the mobile application's visibility in the list of available applications of the same category",
        "⚡ Competent in cyber security to secure information and make mobile applications safe to use",
        "⚡ Practise Agile development as means of increasing the speed and efficiency of the development process through better delegation",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
          style: {
            color: "#027DFD",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "logos:swift",
          style: {
            color: "#FFF",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "logos:css-3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    // Project Management
    {
      title: "Project Management",
      fileName: "ProjectManagementImg",
      skills: [
        "⚡ Have leadership, communication and problem-solving skills",
        "⚡ Have risk, process & risk management skills",
        "⚡ Negotiation and technical skills",
        "⚡ Project control",
        "⚡ Project pre-initiation, initiation, execution, monitoring and control, and closure",
        "⚡ Complete set tasks and projects achieving the successful delivery of a solution that is compliant with Customer, Contractual and Legislative requirements.",
        "⚡ Take responsibility for the effective planning and management of team performance and project schedule, cost and quality for allocated work packages.",
        "⚡ Co-ordinate the activities of the IPT (Integrated Project Team) by establishing appropriate communication mechanisms, including meetings and reporting requirements.",
        "⚡ Establish clear success criteria/ objectives for each member of the IPT and for the IPT as a whole, identify and manage the dependencies between IPT members.",
        "⚡ Establish the tailored Lifecycle Management framework (Project Plans, work based schedules and Cost/Control Accounts) that governs the operation of the IPT Manage the planning, allocation and deployment of team members and workload.",
        "⚡ Ensure the IPT is reviewed and adjusted in accordance with the changing needs of the Project",
        "⚡ Ensure compliance with contractual obligations and the achievement of the Project's economic-financial objectives, ensuring maximum value creation throughout the entire lifecycle of the Project within the contractual constraints/commitments agreed with the Customer.",
        "⚡ Monitor and control all activities and costs, define and implement corrective (or 'recovery') actions required to tackle any deviations from the planned activities",
        "⚡ Manage and report the IPT's activities, including representation of the IPT at contract status reviews",
        "⚡ Organise and co-ordinating internal Phase Reviews, Customer reviews and supplier reviews and manage all resultant actions to closure",
        "⚡ Conduct effective Risk and Opportunity Management, ensuring that all risks and opportunities are recorded, managed and tracked to closure",
        "⚡ Ensuring that adequate support is provided to ensure they are undertaken where mitigation activities are required",
        "⚡ Establish develop and maintain relationships with Suppliers throughout the entire lifecycle of the Project",
        "⚡ Establish and maintain Internal/ external Customer Satisfaction by developing and maintaining relationships with the Customer community throughout the entire lifecycle of the Project",
        "⚡ Establish an effective partnership between the Project and the Functions",
        "⚡ Flag all issues or areas for support in a timely manner",
      ],
      softwareSkills: [
        {
          skillName: "TeamGantt",
          fontAwesomeClassname: "fa6-solid:chart-gantt",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "bi:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Trello",
          fontAwesomeClassname: "logos:trello",
          style: {
            color: "#0079BF",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
          style: {
            color: "#0052CC",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/Sherida101",
    },
    {
      siteName: "CodeSignal",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#000080",
      },
      profileLink: "https://app.codesignal.com/profile/sherida101",
    },
  ],
};

const degrees = {
  degrees: [
    // University of Huddersfield
    // {
    //   title: "University of Huddersfield",
    //   subtitle:
    //     "Master of Science in Cyber Security and Digital Forensics (Distance Learning)",
    //   logo_path: "university_of_huddersfield_logo.png",
    //   alt_name: "University of Huddersfield crest",
    //   duration: "Sept 2024 - Jun 2026",
    //   descriptions: [
    //     "⚡ Gained key skills to become a successful computing researcher by covering the structure of research papers and project reports, reviewing research papers, ethical issues (including plagiarism), defining projects, project management, writing project proposals and making presentations",
    //     "⚡ Studied Artificial Intelligence (AI) techniques such as Hidden Markov Models and Support Vector Machines to understand the fundamentals of AI technology and applications like malware analysis, intrusion detection, and security policy analysis",
    //     "⚡ Studied approaches to preparing data for exploration, supervised and un-supervised approaches to data mining, exploring unstructured data and the social impact of data mining",
    //     "⚡ Developed strategies to evaluate and select Distributed Ledger Technologies (DLT) that are most appropriate for a chosen domain, including Internet of Things and FinTech. ",
    //     "⚡ Acquired in-depth understanding of the security attacks that may threaten wired and wireless networked systems and how these attacks are possible, usually by exploiting vulnerabilities in the design, implementation, or operation of network protocols. You will explore several key network security techniques, such as IP security and network authentication protocols, and gain an understanding of how these techniques protect networks. You will also learn how to identify security vulnerabilities in enterprise networks and propose sophisticated secure designs to face such threats.",
    //     "⚡ Developed critical understanding of threats to digital systems and how these threats are possible, usually by exploiting weaknesses in digital systems",
    //     "⚡ Notable modules learnt - Effective Research and Professional Practice, Applied Cryptography (Distance Learning), Digital Forensics, Foundations of Cyber Security (Distance Learning), Network Security (Distance Learning), Data Mining, Distributed Ledger Technologies and Applications of Artificial Intelligence in Cyber Security",
    //   ],
    //   website_link: "https://www.hud.ac.uk",
    // },
    // Global Institute of Software Technology
    {
      title: "Global Institute of Software Technology",
      subtitle: "General Institute of Higher Education Diploma",
      logo_path: "gist_crest.png",
      alt_name: "GIST school crest",
      duration: "Sept 2019 - Jun 2021",
      descriptions: [
        "⚡ Provided project client requirements analysis, design and programming support for enhancement of mobile and web applications",
        "⚡ Participated in project client presentations due to ability to translate client needs into easy-to-understand software solutions",
        "⚡ Effectively collaborated with project stakeholders, project team and project supervisor",
        "⚡ Served as the Lead Project Manager, Project Tester & Project Requirements Analyst for Software Engineering Capstone Project, Jan 2021 \u002d July 2021",
        "⚡ Interpreted business requirements to articulate business needs to be addressed",
        "⚡ Allocate requirements to software design",
        "⚡ Gained experience using Dart and C# programming languages as well as in scripting and automating tasks using Java",
        "⚡ Managed the software project lifecycle of course projects from initiation to closure phase",
        "⚡ Actively sought ways to improve software development processes and keep the team up-to-date with the latest software technologies and processes with each assigned project",
        "⚡ Proactively managed and monitored project and operational risks to prevent and/or mitigate risks to project clients and businesses",
        "⚡ Maintained a GPA of 3.0 and above",
        "⚡ Notable modules learnt- Advanced Database Systems, Android Application Development I and II,Application Development for IOS Devices, Software Architecture, Software Project Management, Software Modelling, Website & Mobile Application Development I and II",
      ],
      website_link: "http://www.gist.edu.cn/",
    },
    // The University of the West Indies Mona
    {
      title: "The University of the West Indies Mona",
      subtitle:
        "Bachelor of Science Upper Second Class Honours Software Engineering Mobile Application Technologies",
      logo_path: "uwi_mona_crest.png",
      alt_name: "UWI Mona crest",
      duration: "Aug 2017 - May 2019",
      descriptions: [
        "⚡ Collected and documented software requirements using object-oriented and design principles",
        "⚡ Designed efficient data structures and algorithms in terms of time and space complexity",
        "⚡ Created readable, testable, debuggable and well-structured code that complied with IEEE guidelines",
        "⚡ Understood technical design specifications and translated software requirements into workable code and implementation details",
        "⚡ Gained exposure to the software development life cycle from planning to testing phase",
        "⚡ Gained experience writing Python and Java code using object-oriented technologies for mobile and web applications",
        "⚡ Played an integral role in the development of high-performance and high-quality software during the lifecycle of course projects",
        "⚡ Worked alongside talented and collaborative Agile project team",
        "⚡ Received a Mary Seacole award for the Most Outstanding Contribution to Group Mathurin-Mair and Hall Life, 2017-2018",
        "⚡ Attained Mary Seacole Hall Sportswoman of the Year award, 2018-2019",
        "⚡ Member of Angela King Leadership Academy",
        "⚡ Member of: UWI Mona Computing Society and the Angela King Leadership Academy",
        "⚡ Maintained a GPA of 3.0 and above",
        "⚡ Notable modules learnt - Analysis of Algorithms, Discrete Mathematics for Computer Science, Mobile Web Programming, Object-Oriented Design & Implementation, Requirements Engineering",
      ],
      website_link: "https://www.mona.uwi.edu/",
    },
    // SVG DASGC
    {
      title:
        "St. Vincent and the Grenadines Community College Division of Arts Science and General Studies",
      subtitle: "CAPE A'Level Certification",
      logo_path: "svgcc_dasgs_crest.png",
      alt_name: "SVGCC DASGS crest",
      duration: "Aug 2013 - Jun 2015",
      descriptions: [
        "⚡ Ensured all software development meet required specifications and are accurate, fit for purpose, delivered to time and followed the agreed development methodologies with full written documentation",
        "⚡ Proven academic experience developing in C programming language",
        "⚡ Attained strong academic background in numerical subjects - Pure Mathematics and Computer Science",
        "⚡ Rewarded for commendable performance in the 2014 and 2015 May/June CAPE examination for attaining passes in 8 subject-units",
        "⚡ 8 A-level subject-units: Caribbean Studies Unit I, Communication Studies Unit I, Computer Science Units I and II, Pure Mathematics Units I and II and Sociology Units I and II",
      ],
      website_link: "https://www.svgcc.vc/",
    },
    // GHS
    {
      title: "St. Vincent Girls' High School",
      subtitle: "CXC/CSEC O'Level Certification",
      logo_path: "ghs_crest.png",
      alt_name: "GHS crest",
      duration: "Sept 2008 \u002d Jun 2013",
      descriptions: [
        "⚡ Gained experiencing using Pascal programming language as an introduction to programming",
        "⚡ Won an excellence award for attaining 11 subjects in the 2013 May/June CXC/CSEC examination",
        "⚡ Captain of GHS Steel Orchestra and Staff House, 2011-2013",
        "⚡ Won the “Athlete of the Year” title in 2013",
        "⚡ Obtained the GHS 102 anniversary award for the most well-rounded and exceptional student academically and in athletics, 2013",
        "⚡ 11 CXC/CSEC O-level subjects - Biology, Caribbean History, Chemistry, English A, English B, French, Information Technology, Mathematics, Physical Education and Sport, Physics and Spanish",
      ],
      website_link: "https://www.facebook.com/StVincentGirlsHighSchool",
    },
  ],
};

const certifications = {
  certifications: [
    // Certificate in Cyber Security
    // {
    //   title: "Certificate in Cyber Security",
    //   subtitle: "December, 2023",
    //   logo_path: "uk_pda_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1MlvXgIg4r1N3sxTU0SURRFC3QKf_72kX/view?usp=drive_link",
    //   alt_name: "HackerRank Python(Basic) Certification",
    //   color_code: "#ffffff",
    // },
    // Fundamentals of Metrology for Engineering Biology
    {
      title: "Fundamentals of Metrology for Engineering Biology",
      subtitle: "November, 2023",
      logo_path: "lgc_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1MnmnMZgCvehR-a3TaD9G0JFbxL6iiHXE/view?usp=sharing",
      alt_name:
        "LGC Fundamentals of Metrology for Engineering Biology Certification",
      color_code: "#ffffff",
    },
    {
      title: "Machine Learning in Python for Health and Disease",
      subtitle: "November, 2023",
      logo_path: "learn2discover_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1121ATaDOIkRhS2qFWTAuDV5n_UlCdmkw/view?usp=sharing",
      alt_name: "Learn2Discover Machine Learning Certification",
      color_code: "#02214d",
    },
    {
      title: "Basic Python & Data Handling in Python for Health and Disease",
      subtitle: "March, 2023",
      logo_path: "learn2discover_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1u65HI8GV7-SoLF7ylV_-7t-tfuenTg9a/view?usp=share_link",
      alt_name: "Learn2Discover Basic Python & Data Handling Certification",
      color_code: "#02214d",
    },
    {
      title: "HackerRank - Python(Basic)",
      subtitle: "October, 2021",
      logo_path: "hackerRank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/1bd9858dff88",
      alt_name: "HackerRank Python(Basic) Certification",
      color_code: "#0d141e",
    },
    {
      title:
        "Microsoft Technology Associate: Software Development Fundamentals (MTA 98-361)",
      subtitle: "May 2021",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/20f9c86e-547e-4f42-92ed-a05f8549b08f/public_url",
      alt_name: "Microsoft Software Development Fundamentals Certification",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Secondments, Internships & Volunteerism",
  description:
    "Owing to Miss Providence's endeavours, she has developed professional aptitude, strengthened her personal character and sharpened her skills.\n In addition, she has developed soft skills such as being a problem-solver, effective communicator, a team player reliable and resilient.",
  header_image_path: "experience.svg",
  sections: [
    // Work
    {
      title: "Work",
      experiences: [
        {
          title: "Junior Software Developer",
          company: "Earlham Institute",
          company_url: "https://legatohealthtech.com/",
          logo_path: "earlham_institute_logo.png",
          duration: "February 2022 - PRESENT",
          location: "Norwich, Norfolk, United Kingdom",
          description:
            "Assisted the Collaborative Open Omics (COPO) research e-Infrastructure team in the Digital Biology department by developing code to test and maintain the current website service\nSupported internal and external collaborators in the use of the service\n Assisted with updates to the main project website and associated documentation\n Supported existing COPO code by writing unit and integration tests\nMaintained quality assurance of existing COPO pipelines\n Produced content to promote COPO to the research community through the COPO project web pages and social media account\n Leveraged internal stakeholders, project client and supervisor feedback as well as data to formulate a plan of action as well as to inform and guide website application development\n Managed website application with Redis, PostgreSQL and MongoDB",
          color: "#0879bf",
        },
        {
          title: "Graphic Designer",
          company: "Cupid Delights",
          company_url: "https://cupid-delights.netlify.app/",
          logo_path: "cupidDelights_logo.png",
          duration: "October 2021 - January 2022",
          location: "United Kingdom",
          description:
            "Created business designs like business card, nutrition facts labels for the various items sold by the business, business banner, food menu flyer, food Christmas special flyer, review posts, notices, window decal and other flyers that market the business\n Compiled videos to promote the business like a video that advertises the locations where the business' items can be purchased and videos that advertise the processes involved or how to make the food items sold by Cupid Delights\n Attached Cupid Delights' logo to the food videos and photos captured/produced by Cupid Delights",
          color: "#4285F4",
        },
        {
          title:
            "File Clerk, Assistant Accountant & Document Processing Clerk , Kris An Charles Investments Company Limited",
          company: "Kris An Charles Investments Company Limited",
          company_url: "https://krisancharles.com/",
          logo_path: "krisAnCharlesInvestments_logo.png",
          duration: "Jun 2019 - Aug 2019",
          location: "Kingston, Jamaica",
          description:
            "Filed cheque stubs, bank statements and reconciliation reports\n Posted loan payment payroll to customers' accounts\n Updated QuickBooks with customers' loan disbursements, refund and rebate information\n Reconciled bank statements to verify that the amount of cash reported by one's company or company books is consistent with the amount of cash shown in bank records",
          color: "#0879bf",
        },
        {
          title: "Data Entry Clerk & Junior Clerk",
          company: "General Employees Co-operative Credit Union Limited",
          company_url: "https://www.geccu.com/",
          logo_path: "geccu_logo.png",
          duration: "Dec 2015 \u002d Aug 2017; May 2018 \u002d Aug 2018)",
          location: "Kingstown, St. Vincent and the Grenadines",
          description:
            "Organised the database of members who had dormant accounts\n Processed deposits and withdrawals requests of members",
          color: "#9b1578",
        },
        {
          title: "Receptionist/Typist",
          company: "Searchlight Newspaper",
          company_url: "https://searchlight.vc/",
          logo_path: "searchlight_logo.png",
          duration: "Oct 2015 \u002d Nov 2015",
          location: "Kingstown, St. Vincent and the Grenadines",
          description:
            "Effectively, pleasantly and efficiently communicated with and dealt with customer queries either in person, over the phone or via email, provided them with information on advertising rates\n Dealt with and resolved customer complaints in a professional and polite manner\n Answered telephone calls and directed calls to appropriate parties (or took messages as appropriate) within the organisation\n Provided excellent organisational and secretarial skills to type articles submitted for publication\n Maintained a customer-focused approach whilst providing excellent verbal and communication skills",
          color: "#fc1f20",
        },
        {
          title: "Administrative Assistant",
          company: "Healthy Lifestyles",
          company_url:
            "https://www.findyello.com/st-vincent/healthy-lifestyle/profile/",
          logo_path: "healthyLifestyles_logo.png",
          duration: "Sept 2015 \u002d Oct 2015",
          location: "Kingstown, St. Vincent and the Grenadines",
          description:
            "Organised appointments, meetings, papers and office items" +
            "\n Drastically increased office efficiency by spearheading a “go digital” initiative for most planning and paperwork" +
            "\n Assisted with new client enquiry calls in a professional manner" +
            "\n Demonstrated confidential administration when copying, scanning, binding and collating documents" +
            "\n Courteously greeted and corresponded with clients and other visitors during their sojourn at the company's office" +
            "\n Undertook any other reasonable duties, commensurated with the level of the post to ensure the smooth operation of the company",
          color: "#fc1f20",
        },
      ],
    },
    // Secondments
    {
      title: "Secondments",
      experiences: [
        {
          title: "Software Developer Secondee",
          company: "European Bioinformatics Institute | EMBL-EBI ",
          company_url: "https://www.embl.org",
          logo_path: "ebi_logo.png",
          duration: "March 2023",
          location:
            "Wellcome Genome Campus, Hinxton, Cambridgeshire, United Kingdom",
          description:
            "Gained insights about the European Nucleotide Archive (ENA), ENA's role in the International Nucleotide Sequence Database Collaboration (INSDC), ENA presentation and retrieval guides, ENA portal and browser application programming interface (APIs), submission guides as well as services" +
            "\nGained an awareness of ENA comms and training, standard and checklists, ENA checklist developments for a few projects, collaborations and communication methods of the two teams that comprise ENA - Data Co-ordination Archiving team and Archiving and Infrastructure Technology team" +
            "\nAttended a few meetings that revolve around development within presentation services like ENA Content team meetings and ENA user support review meetings" +
            "\nAttended a few meetings that revolve around ENA's support, standards and submission services" +
            "\nUndertook development tasks that used Angular and Typescript to display content on the ENA browser and ENA Webin portal",

          color: "#ee3c26",
        },
      ],
    },
    // Internships
    {
      title: "Internships",
      experiences: [
        {
          title: ".NET Developer Intern",
          company: "Loongo Company Limited",
          company_url: "http://www.loongogroup.com/index.php?styleid=2",
          logo_path: "loongo_CompanyLogo.png",
          duration: "Mar 2021 \u002d Jun 2021",
          location: "Suzhou, Jiangsu, China",
          description:
            "Assisted in the design and development of a MVC ASP.NET course learning management website application using C# programming language\nLeveraged internal stakeholders, project client and supervisor feedback as well as data to formulate a plan of action as well as to inform and guide the website application development\nResponsible for implementing multilingual and notification features using global resources, SignalR, JQuery, Ajax and MSSQL\nDefined and documented operational procedures and project management plan\nAnalysed company and client's requirements in order to produce recommendations, technical design documents and time/cost estimates\nProvided unambiguous, detailed and accurate status reports to project supervisor, project client, internship co-ordinator and team members\nLed the intern team through the software design, development testing and release cycle to the delivery phase\nEnsured that the delivery of the software solution aligned well with business goals and user experience optimisation",
          color: "#ee3c26",
        },
      ],
    },
    // Volunteerism
    {
      title: "Volunteerism",
      experiences: [
        {
          title: "Audio Visual (AV) Volunteer",
          company: "CityGates Church Norwich, formerly known as, Surrey Chapel",
          company_url: "https://www.surreychapel.org.uk/",
          logo_path: "church_logo.png",
          duration: "November 2022 - PRESENT",
          location: "Norwich, United Kingdom",
          description:
            "Ensured that microphones, cameras, Microsoft PowerPoint slides and videos are turned on, issue-free or are correctly formatted before a church service/event begins\n Controlled/Adjusted cameras in the room\n Controlled the video feed that is projected onto the screens and delivered to the livestream and Teradeck (Vidiu) using the Roland video mixer\n Controlled/Adjusted the volume levels of the audio of the microphones and YouTube livestreams using the Soundcraft UI audio mixer\n Controlled the lights that illuminates the front of the church room to give a better lighting on the stage and on the church band\n Troubleshooted and resolved common issues like when there is no sound coming from the computer, headset microphone or source",
          color: "#181717",
        },
        {
          title: "Wordpress Front-end Developer",
          company: "Island Scholars Incorporation",
          company_url: "https://islandscholars.org/",
          logo_path: "island_scholars_logo.png",
          duration: "October 2022 - PRESENT",
          location: "New Jersey, United States of America",
          description:
            "Further developed the front-end of a Wordpress-based website application that offers scholarships and mentorship to persons by optimising user experience,revising the contact form, amending carousel images\nIn-depth understanding of developing and maintaining a website accurately according to client's requirements\n Problem-solved and fixed bugs in the existing project\nRefactored and optimised existing code\n First-class organisational skills with the ability to prioritise, multitask and manage time effectively\nBasic understanding of UX and UI principles\nStrong attention to detail and creative problem-solving skills\nExcellent interpersonal and communication skills with client\n Worked autonomously and used initiative to complete project tasks utilising WooCommerce, Advanced Custom Fields, Custom Post Types, custom WordPress themes and plugins as well as jQuery, HTML, CSS and JS",
          color: "#181717",
        },
        {
          title: "Parkrun Volunteer",
          company: "Parkrun",
          company_url: "https://www.parkrun.org.uk/sloughbottom",
          logo_path: "parkrun_logo.png",
          duration: "July 2022 - PRESENT",
          location: "Norwich, United Kingdom",
          description:
            "Executed roles on various occasions at a weekly 5km community event like  setting up or closing the course event, checking the course event, scanning barcodes, handing out finish tokens to finishers and providing support as well as encouragement to walkers whilst ahead of the Tail Walker but behind those who are running\n Respected Parkrun's principles\n Acted kind and respectful\n Acted reliable, responsible and attentive\n Gained social connections, knowledge, skills, confidence and motivation\n Improved physical and mental strength",
          color: "#181717",
        },
        {
          title: "Open Source Project Contributor & Developer",
          company: "Github",
          company_url: "https://github.com/Sherida101?tab=repositories",
          logo_path: "github_logo.png",
          duration: "September 2021 - PRESENT",
          location: "",
          description:
            "Actively built, tested and published open source projects to GitHub both independently and collaboratively\nProjects included bug fixes and proper documentation",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "The majority of Miss Providence's projects are open source and uses Object-Oriented technologies as well as the latest technology tools." +
    "\nMiss Providence's best experience is building websites and mobile applications and connecting them to databases.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_image1.png",
    description:
      "Aaliyah Providence is available on social media platforms - LinkedIn and GitHub.\nHer proficiency in software testing, website development, mobile application development and project management will transform one's ideas into life.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Norwich,\nNorfolk,\nUnited Kingdom",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/d/viewer?mid=18HEqkHzNYjfCP50TAztmt1hLS9w&hl=en&ll=52.63250308305918%2C1.2938334999999768&z=15",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
