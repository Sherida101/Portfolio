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
    "Aaliyah Providence is a Software Engineer skilled in web and mobile application development and project management, with extensive experience. Passionate and detail-oriented, she is committed to delivering high-quality, user-focused software solutions.",
  og: {
    title: "Aaliyah Providence's Portfolio",
    type: "website",
    url: "https://sherida101.github.io/Portfolio",
  },
};

// Home Page
const greeting = {
  title: "Aaliyah Providence",
  logo_name: "AaliyahProvidence",
  currentJobStatus: "Research Software Engineer",
  subTitle:
    "Motivated Full-stack Developer with a solid foundation in mobile and web app development, software design, and project delivery. Proficient in Python, Java, and JavaScript (including Angular and React), with a focus on usability and functionality.",
  subTitle2:
    "Certified in UX design and research by Google, bringing a user - first approach to development. Quick to learn, collaborative, and strong in problem - solving and time management. Seeking a role to grow technically while building impactful, user - centred digital tools.",
  cvLink:
    "https://drive.google.com/file/d/1IUU6KV6h1p1A3OPqS5pKuGk3NhNHYvNO/view?usp=sharing",
  portfolio_repository: "https://github.com/Sherida101/Portfolio",
  githubProfile: "https://github.com/Sherida101",
  projects: {
    "GitHub projects": "https://github.com/Sherida101?tab=repositories",
    "UI/UX design projects":
      "https://sites.google.com/view/asp-uxui-portfolio/uiux-design?authuser=0",
    "Graphic design projects":
      "https://sites.google.com/view/asp-uxui-portfolio/graphic-design?authuser=0",
  },
  footer: "Aaliyah Providence's Portfolio 2022-2025 | Made with ReactJs",
};

// Social media Links
const socialMediaLinks = [
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
    link: "mailto:asptechinc2145@gmail.com",
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
    // UX Design
    {
      title: "UX Design",
      fileName: "UXDesignImg",
      skills: [
        "⚡ User research (interviews, surveys, ethnographic research)",
        "⚡ Journey mapping and user personas",
        "⚡ Wireframing (low- and mid-fidelity)",
        "⚡ Usability testing and A/B testing",
        "⚡ Information architecture and navigation design",
        "⚡ User flows and interaction design",
        "⚡ Accessibility and inclusive design",
        "⚡ Empathy mapping and problem definition",
        "⚡ Data synthesis and insight-driven design",
        "⚡ Collaboration with product teams and stakeholders",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "devicon:figma",
          style: {
            color: "#ff7262",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Google Forms",
          fontAwesomeClassname: "devicon:google-wordmark",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    // UI Design
    {
      title: "UI Design",
      fileName: "UIDesignImg",
      skills: [
        "⚡ Visual design and typography",
        "⚡ Layout design (grids, spacing, alignment)",
        "⚡ Design systems and component libraries",
        "⚡ High-fidelity mockups and interactive prototypes",
        "⚡ Responsive and adaptive design principles",
        "⚡ Colour theory and accessibility (WCAG standards)",
        "⚡ Branding consistency and visual storytelling",
        "⚡ Handoff to developers (design-to-code workflow)",
        "⚡ Attention to detail and pixel-perfect execution",
        "⚡ Collaboration with UX designers and developers",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "#000000",
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
            color: "#ad2115",
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

// Degrees
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
    // SVG DASGS
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

// Certifications
const certifications = {
  certifications: [
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      subtitle: "October, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Google_Build_Wireframes_and_Low-Fidelity_Prototypes_Certificate_October_2024.pdf",
      alt_name:
        "Google Build Wireframes and Low-Fidelity Prototypes Certification",
      color_code: "#EA4335",
    },
    {
      title: "Conduct UX Research and Test Early Concepts",
      subtitle: "October, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Google_Conduct_UX_Research_and_Test_Early_Concepts_course_October_2024.pdf",
      alt_name:
        "Google Conduct UX Research and Test Early Concepts Certification",
      color_code: "#	#FBBC05",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      subtitle: "September, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Foundations_of_User_Experience_UX_Design_September_2024.pdf",
      alt_name:
        "Google Foundations of User Experience (UX) Design Certification",
      color_code: "#34A853",
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      subtitle: "September, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Start_the_UX_Design_Process_Empathize_Define_and_Ideate_September_2024.pdf",
      alt_name:
        "Google Start the UX Design Process: Empathize, Define, and Ideate Certification",
      color_code: "#4285F4",
    },
    {
      title: "Cybersecurity Attack and Defense Fundamentals",
      subtitle: "August, 2024",
      logo_path: "ec_council_logo.png",
      certificate_link:
        "/certificates/Coursera_EC_Council_Cyber_Security_Attack_and_Defense_Fundamentals_certificate_08082024.pdf",
      alt_name:
        "EC-Council Cybersecurity Attack and Defense Fundamentals Certification",
      color_code: "#EA4335",
    },
    {
      title: "Ethical Hacking Essentials",
      subtitle: "August, 2024",
      logo_path: "ec_council_logo.png",
      certificate_link:
        "/certificates/Coursera_EC_Council_Ethical_Hacking_Essentials_course_08082024.pdf",
      alt_name: "EC-Council Ethical Hacking Essentials Certification",
      color_code: "#EA4335",
    },
    {
      title: "Google Cyber Security Professional certificate",
      subtitle: "August, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Google_Cyber_Security_certificate_badge_05082024.png",
      alt_name: "Google Cyber Security Professional Certificate",
      color_code: "#FBBC05",
    },
    {
      title: "Network Defense Essentials (NDE)",
      subtitle: "August, 2024",
      logo_path: "ec_council_logo.png",
      certificate_link:
        "/certificates/Coursera_EC_Council_Network_Defense_Essentials_course_08082024.pdf",
      alt_name: "EC-Council Network Defense Essentials (NDE) Certification",
      color_code: "#EA4335",
    },
    {
      title: "Sound the Alarm: Detection and Response",
      subtitle: "August, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Sound_the_Alarm_Detection_and_Response_05082024.pdf",
      alt_name: "Google Sound the Alarm: Detection and Response Certification",
      color_code: "#4285F4",
    },
    {
      title: "Assets, Threats, and Vulnerabilities",
      subtitle: "July, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Assets_Threats_and_Vulnerabilities_course_certificate_July_2024.pdf",
      alt_name: "Google Assets, Threats, and Vulnerabilities Certification",
      color_code: "#34A853",
    },
    {
      title: "Automate Cyber Security with Python",
      subtitle: "July, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Automate_Cyber_Security_with_Python_course_certificate_July_2024.pdf",
      alt_name: "Google Automate Cyber Security with Python Certification",
      color_code: "#FBBC05",
    },
    {
      title: "Connect and Protect: Networks and Network Security",
      subtitle: "July, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Connect_and_Protect_Networks_and_Network_Security_course_certificate_July_2024.pdf",
      alt_name:
        "Google Connect and Protect: Networks and Network Security Certification",
      color_code: "#4285F4",
    },
    {
      title: "Digital Forensics Essentials (DFE)",
      subtitle: "July, 2024",
      logo_path: "ec_council_logo.png",
      certificate_link:
        "/certificates/Coursera_Digital_Forensics_Essentials_course_certificate_July_2024.pdf",
      alt_name: "EC-Council Digital Forensics Essentials Certification",
      color_code: "#EA4335",
    },
    {
      title: "Foundations of Cyber Security",
      subtitle: "July, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Foundations_of_Cyber_Security_course_certificate_July_2024.pdf",
      alt_name: "Google Foundations of Cyber Security Certification",
      color_code: "#34A853",
    },
    {
      title: "Google AI Essentials",
      subtitle: "July, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Google_AI_Essentials_course_certificate_July_2024.pdf",
      alt_name: "Google AI Essentials Certification",
      color_code: "#FBBC05",
    },
    {
      title: "Play It Safe: Manage Security Risks",
      subtitle: "July, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Play_It_Safe_Manage_Security_Risks_course_certificate_July_2024.pdf",
      alt_name: "Google Play It Safe: Manage Security Risks Certification",
      color_code: "#EA4335",
    },
    {
      title: "Put It to Work: Prepare for Cybersecurity Jobs",
      subtitle: "July, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Put_It_to_Work_Prepare_for_Cyber_Security_Jobs_course_certificate_July_2024.pdf",
      alt_name:
        "Google Put It to Work: Prepare for Cybersecurity Jobs Certification",
      color_code: "#34A853",
    },
    {
      title: "Tools of the Trade: Linux and SQL",
      subtitle: "July, 2024",
      logo_path: "google_logo.png",
      certificate_link:
        "/certificates/Coursera_Tools_of_the_Trade_Linux_and_SQL_course_certificate_July_2024.pdf",
      alt_name: "Google Tools of the Trade: Linux and SQL Certification",
      color_code: "#4285F4",
    },
    {
      title: "Certificate in Cyber Security",
      subtitle: "December, 2023",
      logo_path: "uk_pda_logo.png",
      certificate_link:
        "/certificates/UKPDA_Cyber_Security_Course_Certificate_07122023.pdf",
      alt_name:
        "UK Professional Development Academy Certificate in Cyber Security",
      color_code: "#2a2462",
    },
    {
      title: "Fundamentals of Metrology for Engineering Biology",
      subtitle: "November, 2023",
      logo_path: "lgc_logo.png",
      certificate_link:
        "/certificates/LGC_Fundamentals_of_Metrology_for_Engineering_Biology_course_certificate_November_2023.pdf",
      alt_name:
        "LGC Fundamentals of Metrology for Engineering Biology Certification",
      color_code: "#007889",
    },
    {
      title: "Machine Learning in Python for Health and Disease",
      subtitle: "November, 2023",
      logo_path: "learn2discover_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1121ATaDOIkRhS2qFWTAuDV5n_UlCdmkw/view?usp=sharing",
      alt_name: "Learn2Discover Machine Learning Certification",
      color_code: "#ec619f",
    },
    {
      title: "Basic Python & Data Handling in Python for Health and Disease",
      subtitle: "March, 2023",
      logo_path: "learn2discover_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1u65HI8GV7-SoLF7ylV_-7t-tfuenTg9a/view?usp=share_link",
      alt_name: "Learn2Discover Basic Python & Data Handling Certification",
      color_code: "#6e6ca9",
    },
    {
      title: "HackerRank - Python(Basic)",
      subtitle: "October, 2021",
      logo_path: "hackerRank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/1bd9858dff88",
      alt_name: "HackerRank Python(Basic) Certification",
      color_code: "#00ea64",
    },
    {
      title:
        "Microsoft Technology Associate: Software Development Fundamentals (MTA 98-361)",
      subtitle: "May 2021",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/20f9c86e-547e-4f42-92ed-a05f8549b08f/public_url",
      alt_name: "Microsoft Software Development Fundamentals Certification",
      color_code: "#f44e24",
    },
  ],
};

// Experience
const experience = {
  title: "Experience",
  subtitle: "Work, Secondments, Internships & Volunteerism",
  description:
    "Through her experiences, Jane Doe has developed strong professional aptitude, strengthened her character, and sharpened her technical skills." +
    "\nShe has also cultivated key soft skills, including problem- solving, effective communication, teamwork, reliability and resilience.",

  header_image_path: "experience.svg",
  sections: [
    // Work
    {
      title: "Work",
      experiences: [
        {
          title: "Research Software Engineer",
          company: "Earlham Institute",
          company_url: "https://www.earlham.ac.uk/",
          logo_path: "earlham_institute_logo.png",
          duration: "December 2024 - PRESENT",
          location: "Norwich, Norfolk, England, United Kingdom",
          description: [
            "Contributed to the development of the Collaborative OPen Omics (COPO) platform, a metadata brokering service supporting projects such as Aquatic Symbiosis Genomics (ASG), Darwin Tree of Life (DToL), the European Reference Genome Atlas (ERGA) and ERGA Pilot.",
            "Responded to bug reports and feature requests from stakeholders such as Sanger Institute, Biodiversity Genomics Europe (BGE) project and users, implementing solutions to enhance platform functionality and user experience.",
            "Designed and delivered APIs and user-facing tools enabling researchers to annotate metadata, deposit datasets in public repositories like BioImage Archive (BIA), European Nucleotide Archive (ENA) and Zenodo and link data to publications.",
            "Managed software solutions for tracking and lifecycle management of life science data across the COPO ecosystem.",
            "Used Celery for distributed task queue management and background job processing in a Python web application.",
            "Reviewed Git pull requests to maintain code quality and suggest improvements prior to integration.",
            "Designed and implemented data structures and user interfaces to represent life science metadata, including reference genomes and marine species.",
            "Promoted Findability, Accessibility, Interoperability and Reusability (FAIR) data principles by developing scalable deposition tools, contributing to best practices, and delivering training at national and international scientific events.",
            "Diagnosed performance issues and implemented fixes to ensure stable, responsive service delivery across the web platform.",
            "Used command-line tools in UNIX/Linux environments for scripting, automation, text processing, file management and system operations like bash shell environments and grep to search text and using patterns",
          ],

          color: "#0879bf",
        },
        {
          title: "Junior Software Developer",
          company: "Earlham Institute",
          company_url: "https://www.earlham.ac.uk/",
          logo_path: "earlham_institute_logo.png",
          duration: "February 2022 - December 2024",
          location: "Norwich, Norfolk, England,United Kingdom",
          description: [
            "Contributed to the maintenance and testing of the Collaborative OPen Omics (COPO) metadata platform, a Python Django-based application, by developing unit and integration tests.",
            "Assisted the research infrastructure team in improving system reliability and service continuity.",
            "Supported internal and external users, troubleshooting issues and ensuring smooth adoption of the platform.",
            "Updated project documentation and website content to improve usability and clarity.",
            "Maintained and improved code quality by adhering to best practices, refining conventions, and conducting code reviews within an existing collaborative project.",
            "Maintained quality assurance for COPO data pipelines, identifying and resolving issues proactively.",
            "Engaged with the research community through seminars and poster presentations, promoting COPO.",
            "Incorporated feedback from stakeholders and users to guide usability of the web application.",
            "Designed and consumed RESTful APIs to enable communication between microservices and client applications.",
            "Managed and queried backend data using MongoDB to support omics data content, PostgreSQL for user authentication and details and Redis for caching and session management.",
            "Developed interactive visualisations of brokered metadata using D3.js, including world maps, pie charts, bar and line graphs with SVG-based graphics.",
          ],
          color: "#0879bf",
        },
        {
          title: "Graphic Designer",
          company: "Cupid Delights",
          company_url: "https://cupid-delights.netlify.app/",
          logo_path: "cupidDelights_logo.png",
          duration: "October 2021 - February 2022",
          location: "United Kingdom",
          description: [
            "Designed a range of branded marketing materials including business cards, nutrition labels, banners, food menus, flyers (sales, holiday specials), review posts, reheating guides, notices and window decals.",
            "Produced promotional videos showcasing product availability, preparation processes, and behind-the-scenes content.",
            "Added branding elements (e.g. logo overlays) to photos and videos for consistency and recognition across digital platforms.",
          ],
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
          description: [
            "Filed cheque stubs, bank statements and reconciliation reports in an organised and timely manner",
            "Processed loan payment payroll entries and updated customer accounts accordingly",
            "Maintained financial records in QuickBooks, including loan disbursements, refunds and rebates",
            "Performed bank reconciliations to ensure consistency between internal records and bank statements",
          ],
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
            "Organised the database of members who had dormant accounts\n Processed the deposits and withdrawals requests of members",
          color: "#9b1578",
        },
        {
          title: "Receptionist/Typist",
          company: "Searchlight Newspaper",
          company_url: "https://searchlight.vc/",
          logo_path: "searchlight_logo.png",
          duration: "Oct 2015 \u002d Nov 2015",
          location: "Kingstown, St. Vincent and the Grenadines",
          description: [
            "Communicated effectively and professionally with customers in person, by phone and via email; provided information on advertising rates.",
            "Handled and resolved customer complaints politely and efficiently, maintaining a high standard of service.",
            "Answered and directed telephone calls to appropriate staff members or took accurate messages when necessary.",
            "Typed and formatted articles for publication, demonstrating strong secretarial and organisational skills.",
            "Maintained a customer-focused approach with excellent verbal and written communication skills.",
          ],

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
          description: [
            "Managed appointments, meetings, and office supplies to maintain day-to-day efficiency",
            "Improved administrative workflows by leading a successful “go digital” transition for planning and paperwork",
            "Handled new client enquiries professionally via phone and in person",
            "Maintained confidentiality while copying, scanning, binding and collating sensitive documents",
            "Welcomed and assisted clients and visitors, ensuring a professional and friendly experience",
            "Performed additional duties as required to support the smooth operation of the office",
          ],

          color: "#fc1f20",
        },
      ],
    },
    // Secondments
    {
      title: "Secondments",
      experiences: [
        {
          title: "Software Developer",
          company: "European Bioinformatics Institute | EMBL-EBI ",
          company_url: "https://www.embl.org",
          logo_path: "ebi_logo.png",
          duration: "March 2023",
          location:
            "Wellcome Genome Campus, Hinxton, Cambridgeshire, United Kingdom",
          description: [
            "Developed user interface (UI) features for the European Nucleotide Archive (ENA) Webin Portal using Angular and TypeScript, including support for custom fields in downloadable templates and improved access to public records.",
            "Implemented display formats for genome assembly accessions (e.g. concatenated or separated FASTA, text) and chromosome count views within the ENA browser presentation services.",
            "Gained practical understanding of ENA's data submission and retrieval systems, including its APIs, presentation guides and integration in the International Nucleotide Sequence Database Collaboration (INSDC) collaboration.",
            "Attended and contributed to team meetings on ENA content, user support, submission services, and development planning across Data Co-ordination & Archiving and Infrastructure Technology teams.",
            "Acquired familiarity with ENA submission standards, checklists, training materials and external collaboration protocols.",
          ],

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
          description: [
            "Contributed to the design and development of a course management web application using ASP.NET MVC and C#.",
            "Collaborated with stakeholders and project supervisors to gather feedback, inform decisions and guide development priorities.",
            "Implemented multilingual support and notification features using Global Resources, SignalR, jQuery, Ajax and MSSQL.",
            "Drafted operational procedures and a detailed project management plan to support project execution.",
            "Conducted requirements analysis and produced technical documentation, recommendations and time as well as cost estimates.",
            "Delivered clear, detailed progress reports to supervisors, clients and team members.",
            "Led a team of interns through the full software development lifecycle - from design and implementation to testing and deployment.",
            "Ensured the final product aligned with business goals and provided an optimised user experience.",
          ],

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
          description: [
            "Ensured microphones, cameras, PowerPoint slides, and videos were properly set up, formatted, and issue-free before services and events.",
            "Operated and adjusted cameras during events to capture live footage.",
            "Managed video feeds projected onto screens and streamed via livestream and Teradek (Vidiu) using a Roland video mixer.",
            "Controlled and balanced audio levels for microphones and YouTube livestreams using the Soundcraft UI audio mixer.",
            "Managed stage lighting to enhance visibility and ambiance for the band and speakers.",
            "Troubleshot and resolved common technical issues, including audio source problems and equipment connectivity.",
          ],
          color: "#181717",
        },
        {
          title: "Wordpress Front-end Developer",
          company: "Island Scholars Incorporation",
          company_url: "https://islandscholars.org/",
          logo_path: "island_scholars_logo.png",
          duration: "October 2022 - November 2022",
          location: "New Jersey, United States of America",
          description: [
            "Improved the front-end of a WordPress-based scholarship and mentorship platform by optimising user experience, revising the contact form and updating carousel images.",
            "Ensured accurate implementation of client requirements through close attention to detail and effective communication.",
            "Debugged and resolved issues in the existing codebase; refactored and optimised legacy code for better performance.",
            "Applied basic UX/UI principles to enhance visual layout and user interactions.",
            "Collaborated with the client and worked independently to deliver project milestones on time.",
            "Utilised tools and technologies including WooCommerce, Advanced custom fields, post types, themes as well as plugins, jQuery, HTML, CSS, and JavaScript.",
          ],
          color: "#181717",
        },
        {
          title: "Parkrun Volunteer",
          company: "Parkrun",
          company_url: "https://www.parkrun.org.uk/sloughbottom",
          logo_path: "parkrun_logo.png",
          duration: "July 2022 - PRESENT",
          location: "Norwich, United Kingdom",
          description: [
            "Performed various roles at a weekly 5km community event, including setting up and closing the course, checking the route, scanning barcodes, and handing out finish tokens to participants.",
            "Provided support and encouragement to walkers positioned ahead of the Tail Walker but behind the runners.",
            "Consistently upheld Parkrun's principles by acting with kindness, respect, reliability, and attentiveness.",
            "Developed social connections, gained new skills, and boosted confidence and motivation.",
            "Contributed to improving physical and mental well-being through active community involvement.",
          ],
          color: "#181717",
        },
        {
          title: "Open Source Project Contributor & Developer",
          company: "Github",
          company_url: "https://github.com/Sherida101?tab=repositories",
          logo_path: "github_logo.png",
          duration: "September 2021 - PRESENT",
          location: "",
          description: [
            "Actively built, tested, and published open source projects on GitHub, working both independently and collaboratively with other contributors.",
            "Contributed bug fixes, implemented new features, and maintained comprehensive documentation to improve project usability and sustainability.",
            "Utilized version control workflows (Git/GitHub) and collaborated through pull requests, code reviews, and issue tracking.",
            "Engaged with open source communities to gather feedback and foster effective teamwork.",
            "Projects spanned programming languages such as JavaScript, React, Python, demonstrating versatility and commitment to quality code.",
          ],
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects page
const projectsHeader = {
  title: "Projects",
  description:
    "Most of Miss Providence's projects are open source and developed using object-oriented programming principles alongside modern technology tools." +
    "\nHer strongest experience lies in building responsive web and mobile applications, with a focus on integrating them with databases and ensuring both usability and functionality.",
  otherProjectsOverview: "",
  otherProjects: {},
  avatar_image_path: "projects_image.svg",
};

// Publications
const publicationsHeader = {
  title: "Publications",
  description:
    "I have contributed as a co-author to several peer-reviewed research publications, developed in collaboration with multidisciplinary teams. These publications highlight my engagement in collaborative scientific research and reflect my contributions to advancing knowledge in my areas of interest.",
  avatar_image_path: "publications.svg",
};

// Contact page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_image.png",
    description:
      "Aaliyah Providence is active on LinkedIn and GitHub, where you can explore her professional background and projects. With expertise in software testing, web and mobile application development, and project management, she is passionate about bringing ideas to life through technology.",
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
