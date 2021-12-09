/* Change this file to get your personal Portfolio */

import { controllers } from "chart.js";
import { isDefinitionNode } from "graphql";

// Website related settings
const settings = {
  isSplash: false, //true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aaliyah Providence's Portfolio",
  description:
    "Aaliyah Providence is a recent Software Engineer graduate who has attained skills in website development, mobile application development and project management. Driven by passion, she takes pride in providing the best service and high quality software as possible.",
  og: {
    title: "Aaliyah Providence's Portfolio",
    type: "website",
    url: "'https://Sherida101.github.io/portfolioWebsite'",
  },
};

//Home Page
const greeting = {
  title: "Aaliyah Providence",
  logo_name: "AaliyahProvidence",
  currentJobStatus: "Graduate Software Engineer",
  subTitle:
    "A recent Software Engineering graduate with a BSc. (Hons) 2:1 degree from the University of the West Indies Mona, looking to secure a Graduate Software Engineering position or similar with an opportunity to utilise and further develop current problem-solving and technical skills as well as knowledge in software development. \nHas extensive education in mobile and website application development as well as software design, project management and software testing. A quick learner with effective time management and efficient multi-tasking skills.\nStrong work ethic in a team or individual settings to drive product success and process efficiency. \nRecent practical work experience as a website developer using C# programming language and ASP.NET framework.",
  resumeLink:
    "https://drive.google.com/file/d/13qwuWQZPK5nTftZDLwo66rUvXoIQvGnN/view?usp=sharing",
  portfolio_repository: "https://github.com/Sherida101/PortfolioWebsite",
};

const socialMediaLinks = [
  /* Social Media Links */
  // github: "https://github.com/Sherida101",
  // linkedin: "https://www.linkedin.com/in/aaliyah-providence-0355b321a/",
  // gmail: "sherida567@gmail.com",
  // facebook: "https://www.facebook.com/smileysherida/",
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
  {
    name: "Facebook",
    link: "https://www.facebook.com/smileysherida/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Write reusable, testable and efficient code that is performant, stable and secure",
        "⚡ Design high-quality mobile user interface",
        "⚡ Experience in developing cross-platform applications - Android & iOS",
        "⚡ Perform backend computing involving security and database management",
        "⚡ Experience with Android and iOS SDK concepts",
        "⚡ Capable of optimising an application’s visibility in a list of the available applications of the same category so that the application can stand out amongst competition",
        "⚡ Adopt Agile development process to obtain fast design, development and release events",
        "⚡ Develop beautiful code within a fast-paced production cycle, without compromising quality",
        "⚡ Strong problem-solving skills and a hunger for efficient solutions",
        "⚡ Become autonomous and grow to have the confidence to lead projects whilst supporting others",
        "⚡ Solid understanding of Object-orientated design",
        "⚡ Thrive and enjoy solving challenging tasks, as part of a team in a fast-paced environment",
        "⚡ Passionate about software engineering and about delivering a quality product",
        "⚡ Have an understanding and experience with backend technologies",
        "⚡ Committed to using automated testing platforms and unit tests to deliver readable, maintainable code",
        "⚡ Have an understanding of deployment technologies and concepts",
        "⚡ Have an understanding of issue management, code versioning, continuous integration and deployment tools",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
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
      ],
    },
    {
      title: "Frontend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deep-learning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Knowledge of OOP software languages and frameworks such as C#,",
        "⚡ Understanding of version control (GitHub)",
        "⚡ Working on multiple projects in a fast-paced academic environment",
        "⚡ Experience with SignalR push notification or messaging technologies",
        "⚡ Practical experience with MVC .NET Development using C#",
        "⚡ Excellent Mathematics and OOD experience",
        "⚡ Capable of simplifying complex concepts, setting objectives and giving constructive feedback",
        "⚡ Able to deal with domains, servers and hosting issues",
        "⚡ Software Development Intern experience as a .NET Developer",
      ],
      softwareSkills: [
        {
          skillName: "CSS",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
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
          skillName: "MVC ASP.NET",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
          skillName: "Bootstrap",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Python Flask",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "CHSTML",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Python Flask",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "FullStackImg",
      skills: [
        "⚡ Leadership, communication, problem-solving",
        "⚡ Risk, process & risk management",
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
        "⚡ Flag all issues/ areas for support in a timely manner",
      ],
      softwareSkills: [
        {
          skillName: "TeamGantt",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Software Testing",
      fileName: "FullStackImg",
      skills: [
        "ability to recognise and resolve problems quickly and efficiently",
        "⚡ Knowledge of DevOps, automation and Agile methodology",
        "⚡ Knowledge of testing techniques such as black box testing, performance testing, white box testing, security testing, system testing, unit testing, integration testing, component testing",
        "⚡ In-depth knowledge of Software Development Life Cycle (SDLC) like Waterfall,Kanban and Scrum, ",
        "⚡ Knowledge and hands-on experience of testing tools like automation tools, test management tools",
        "⚡ Negotiation and technical skills",
        "⚡ Collaborate with developers to identify and resolve software defects",
        "⚡ Work with project teams to produce test plans and scripts",
        "⚡ Review software applications during development to confirm that all requirements have been met",
        "⚡ Work with clients as they test and accept applications, advising and assisting as necessary",
        "⚡ Build strong relationships, communicating and collaborating with clients and colleagues",
        "⚡ Build a test harness to check the functionality of each module to ensure each stage of the hardware build is fully tested in sequence rather than at the end of the set up",
      ],
      softwareSkills: [
        {
          skillName: "JUnit",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Database Management",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Eye for detail and accuracy",
        "⚡ Understand of structured query language (SQL)",
        "⚡ Knowledge of ‘relational database management systems’ (RDBMS), ‘object oriented database management systems’ (OODBMS) and XML database management systems",
        "⚡ Create query definitions that allow data to be extracted",
        "⚡ Design and preparing reports for management",
        "⚡ Set up and testing new database and data handling systems",
        "⚡ Develop protocols for data processing",
      ],
      softwareSkills: [
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:amazonaws",
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
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Apache Hive",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Apache Hadoop",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Graphic Designer",
      fileName: "DesignImg",
      skills: [
        "⚡ Excellent IT skills, especially with design and photo-editing software",
        "⚡ Liaising with clients to determine their requirements and budget",
        "⚡ Exceptional creativity and innovation",
        "⚡ Excellent time management and organisational skills",
        "⚡ Professional approach to time, costs and deadlines",
        "⚡ Managing client proposals from typesetting through to design, print and production",
        "⚡ Working with clients, briefing and advising them with regard to design style, format, print production and timescales",
        "⚡ developing concepts, graphics and layouts for product illustrations, company logos and websites",
        "⚡ Determining size and arrangement of copy and illustrative material, as well as font style and size",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
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
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
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
        color: "#5B4638",
      },
      profileLink: "https://app.codesignal.com/profile/sherida101",
    },
  ],
};

const degrees = {
  degrees: [
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
        "⚡ Served as the Lead Project Manager, Project Tester & Project Requirements Analyst for Software Engineering Capstone Project, Jan 2021 – July 2021",
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
    {
      title:
        "St. Vincent and the Grenadines Community College Division of Arts Science and General Studies",
      subtitle: "CAPE Certification",
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
    {
      title: "St. Vincent Girls’ High School",
      subtitle: "CXC/CSEC O'Level Certification",
      logo_path: "ghs_crest.png",
      alt_name: "GHS crest",
      duration: "Sept 2008 – Jun 2013",
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
    {
      title:
        "Microsoft Technology Associate: Software Development Fundamentals (MTA 98-361)",
      subtitle: "May 2021",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/20f9c86e-547e-4f42-92ed-a05f8549b08f/public_url",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "HackerRank - Python(Basic)",
      subtitle: "October, 2021",
      logo_path: "hackerRank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/1bd9858dff88",
      alt_name: "HackerRank Python(Basic) Certification",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteerism",
  description:
    "Miss Providence has worked at several accounting firms in the Caribbean. In 2021, her role as a MVC ASP.NET Intern Website Developer was enlightening. Miss Providence uses her spare time to build open source GitHub projects using newly learnt programming languages - recenGolang, Angular, Nodejs, react native applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title:
            "File Clerk, Assistant Accountant & Document Processing Clerk , Kris An Charles Investments Company Limited",
          company: "Kris An Charles Investments Company Limited",
          company_url: "https://krisancharles.com/",
          logo_path: "krisAnCharlesInvestments_logo.png",
          duration: "Jun 2019 - Aug 2019",
          location: "Kingston, Jamaica",
          description:
            "Filed cheque stubs, bank statements and reconciliation reports\nPosted loan payment payroll to customers’ accounts\nUpdated QuickBooks with customers’ loan disbursements, refund and rebate information\nReconciled bank statements to verify that the amount of cash reported by one’s company or company books is consistent with the amount of cash shown in bank records",
          color: "#0879bf",
        },
        {
          title: "Data Entry Clerk & Junior Clerk",
          company: "General Employees Co-operative Credit Union Limited",
          company_url: "https://www.geccu.com/",
          logo_path: "geccu_logo.png",
          duration: "Dec 2015 – Aug 2017; May 2018 – Aug 2018)",
          location: "Kingstown, St. Vincent and the Grenadines",
          description:
            "Organised the database of members who had dormant accounts\nProcessed the deposits and withdrawals requests of members",
          color: "#9b1578",
        },
        {
          title: "Receptionist/Typist",
          company: "Searchlight Newspaper",
          company_url: "https://searchlight.vc/",
          logo_path: "searchlight_logo.png",
          duration: "Oct 2015 – Nov 2015",
          location: "Kingstown, St. Vincent and the Grenadines",
          description:
            "Effectively, pleasantly and efficiently communicated with and dealt with customer queries either in person, over the phone or via email, provided them with information on advertising rates\nDealt with and resolved customer complaints in a professional and polite manner\nAnswered telephone calls and directed calls to appropriate parties (or took messages as appropriate) within the organisation\nProvided excellent organisational and secretarial skills to type articles submitted for publication\nMaintained a customer-focused approach whilst providing excellent verbal and communication skills",
          color: "#fc1f20",
        },
        {
          title: "Administrative Assistant",
          company: "Healthy Lifestyles",
          company_url:
            "https://www.findyello.com/st-vincent/healthy-lifestyle/profile/",
          logo_path: "healthyLifestyles_logo.png",
          duration: "Sept 2015 – Oct 2015",
          location: "Kingstown, St. Vincent and the Grenadines",
          description:
            "Organised appointments, meetings, papers and office items\nDrastically increased office efficiency by spearheading a “go digital” initiative for most planning and paperwork\nAssisted with new client enquiry calls in a professional manner\nDemonstrated confidential administration when copying, scanning, binding and collating documents\nCourteously greeted and corresponded with clients and other visitors during their sojourn at the company’s office\nUndertook any other reasonable duties, commensurated with the level of the post to ensure the smooth operation of the company",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: ".NET Developer Intern",
          company: "Loongo Company Limited",
          company_url: "http://www.loongogroup.com/index.php?styleid=2",
          logo_path: "loongo_CompanyLogo.png",
          location: "Suzhou, Jiangsu, China",
          description:
            "Assisted in the design and development of a MVC ASP.NET course learning management website application using C# programming language\nLeveraged internal stakeholders, project client and supervisor feedback as well as data to formulate a plan of action as well as to inform and guide the website application development\nResponsible for implementing multilingual and notification features using global resources, SignalR, JQuery, Ajax and MSSQL\nDefined and documented operational procedures and project management plan\nAnalysed company and client’s requirements in order to produce recommendations, technical design documents and time/cost estimates\nProvided unambiguous, detailed and accurate status reports to project supervisor, project client, internship co-ordinator and team members\nLed the intern team through the software design, development testing and release cycle to the delivery phase\nEnsured that the delivery of the software solution aligned well with business goals and user experience optimisation",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerism",
      experiences: [
        {
          title: "Graphic Designer & Mobile Application Developer",
          company: "Cupid Delights",
          company_url: "https://cupid-delights.netlify.app/",
          logo_path: "cupidDelights_logo.png",
          duration: "October 2021 - Present",
          location: "Tidworth, Wiltshire, United Kingdom",
          description:
            "Key achievements:\nBusiness Card Design\nFood Packaging Label Design\nMenu Flyer Design\nFacebook & Google Review Post Design\nFood & Safety Management Plan Documentation\nCoconut Cake Video Marketing Material\nMobile Application Development & Testing\nScan Business Documents (per page)\nBatch Watermark Photos & Videos With Company Logo\nCleaning Schedule Creation\nChristmas Roti Sale Flyer Design\nBusiness Banner Design\nWedding Vow Renewal & Christening Save The Date Flyer Design\nWedding Vow Renewal & Christening Invitation Flyer Design",
          color: "#4285F4",
        },
        {
          title: "Open Source Project Contributor & Developer",
          company: "Github",
          company_url: "https://github.com/Sherida101?tab=repositories",
          logo_path: "github_logo.png",
          duration: "September 2021 - Present",
          location: "Work From Home",
          description:
            "Actively building, testing and publishing open source projects to GitHub both independently and collaboratively\nProjects include bug fixes and proper documentation",
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
    "The majority of Miss Providence's projects are open source and uses Object-Oriented technologies, latest technology tools. Miss Providence's best experience is building mobile applications and connecting them to databases.",
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
    profile_image_path: "profile_image.png",
    description:
      "Aaliyah Providence is available on social media platforms - LinkedIn, Facebook, GitHub and Stack Overflow.\nSend her a message, she will reply within 24 hours. Her proficiency in website development, mobile applications development and project management will transform one's ideas into life.",
  },
  addressSection: {
    title: "Address",
    subtitle: "24 Cambrai Drive\nTidworth, Wiltshire\nUnited Kingdom,\nSP9 7TH",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/RzkESEE1mLUXA2zy9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+44 7904 876860",
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
