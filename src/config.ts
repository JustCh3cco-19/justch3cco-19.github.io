const companies = {
  fastChargeEngineering: {
    name: "Fast Charge Engineering",
    url: "https://fceitalia.it",
  },
  sapienzaFastCharge: {
    name: "Sapienza Fast Charge Formula Student Electric Team",
    url: "https://sapienzafastcharge.it",
  },
};

export const siteConfig = {
  name: "Francesco Zompanti",

  title: "Software Engineer | Embedded Systems | AI",

  description:
    "Portfolio of Francesco Zompanti, Software Engineer focused on embedded systems, autonomous vehicles, industrial software, and AI.",

  accentColor: "#d81d1dff",

  social: {
    email: "zompantifrancesco@gmail.com",
    linkedin: "https://linkedin.com/in/francesco-zompanti",
    github: "https://github.com/JustCh3cco-19",
  },

  aboutMe:
    "I’m a Computer Science student at Sapienza University of Rome and currently Team Leader at Sapienza Fast Charge, the Formula Student team of Sapienza University of Rome. My experience in Formula Student has shaped the way I approach engineering: not just as a technical challenge, but as a combination of people, organization, decision-making and problem solving. Leading a multidisciplinary team has given me the opportunity to coordinate complex projects, align different technical and business areas, and work in a fast-paced environment where collaboration and execution are essential. Alongside Formula Student, I work at Fast Charge Engineering, where I develop embedded software, automated testing solutions, CAN-based diagnostic tools and custom ERP applications. This professional experience has strengthened my background in software engineering, embedded systems and industrial applications. Within Sapienza Fast Charge, before taking on the Team Leader role, I also worked on autonomous systems as ADAS Technical Responsible, contributing to the development of software architecture and telemetry systems for an autonomous Formula Student race car.I enjoy using technology as a tool to solve real-world problems rather than treating software development as an end in itself. My technical background allows me to understand engineering challenges, while my leadership experience has increasingly drawn me toward project and team management, operations and strategic decision-making. I’m particularly interested in the intersection between technology and business, and in environments where technical understanding, data and organizational decision-making come together.Motorsport is one of the fields where I see these worlds converging at their best: engineering, data, technology, operations and teamwork, all working toward a common objective.I’m always looking for opportunities to take on challenging projects, learn from ambitious people and work on problems where technology can make a tangible impact.",

  skills: [
    "C",
    "C++",
    "CUDA",
    "Python",
    "Bash",
    "MATLAB",
    "Simulink",
    "ROS 2",
    "CAN Bus",
    "Linux",
    "Git",
    "Docker",
    "RabbitMQ",
    "OpenCV",
    "YOLO",
    "Odoo",
  ],

  projects: [
    {
      name: "TennisVision",
      description:
        "Developed an AI-powered tennis analysis system using computer vision to detect players, track the ball, and generate match statistics from video footage. Leveraged deep learning and image processing techniques to automate performance analysis.",
      link: "https://github.com/JustCh3cco-19/TennisVision",
      skills: [
        "Python",
        "Computer Vision",
        "OpenCV",
        "YOLO",
        "Deep Learning",
      ],
    },
    {
      name: "Vehicle Routing Problem Solver",
      description:
        "Implemented optimization algorithms to solve the Vehicle Routing Problem (VRP), focusing on efficient route planning and resource allocation under operational constraints.",
      link: "https://github.com/JustCh3cco-19/VehicleRoutingProblem",
      skills: [
        "C",
        "CUDA",
        "Optimization",
        "Algorithms",
        "Operations Research",
      ],
    },
    {
      name: "WASA Text",
      description:
        "Developed a full-stack real-time messaging application featuring user authentication, chat management, RESTful APIs, and persistent data storage.",
      link: "https://github.com/JustCh3cco-19/WASAText",
      skills: [
        "Go",
        "Vue.js",
        "REST API",
        "SQLite",
        "Web Development",
      ],
    },
    {
      name: "Secure Multithreaded File Transfer System",
      description:
        "Developed a secure multithreaded client-server application in C using TCP sockets and POSIX threads. The system supports concurrent file transfers, a custom communication protocol, 64-bit XOR encryption, and robust error handling.",
      link: "https://github.com/JustCh3cco-19/system-programming",
      skills: [
        "C",
        "Networking",
        "Linux",
        "POSIX Threads",
        "Operating Systems",
      ],
    },
    {
      name: "C Source Code Preprocessor",
      description:
        "Designed and implemented a modular C preprocessor supporting recursive #include expansion, comment removal, identifier validation, detailed logging, and comprehensive error handling.",
      link: "https://github.com/JustCh3cco-19/myPreCompiler",
      skills: [
        "C",
        "Linux",
        "Parsing",
        "Operating Systems",
      ],
    },
    {
      name: "Autonomous Vehicle Microservices Platform",
      description:
        "Designed a distributed autonomous vehicle simulation using Docker-based microservices. Computer vision, SLAM, path planning, and high-level control services communicate asynchronously through RabbitMQ.",
      link: "https://github.com/JustCh3cco-19/microservices-architetcture",
      skills: [
        "Python",
        "Docker",
        "RabbitMQ",
        "Linux",
        "Microservices",
      ],
    },
  ],

  experience: [
    {
      company: companies.fastChargeEngineering,
      roles: [
        {
          title: "Software Engineer",
          dateRange: "Mar 2026 - Present",
          bullets: [
            "Develop embedded software and automated testing tools for battery systems using C and Python.",
            "Design CAN-based diagnostic, validation, and data acquisition tools for battery modules and industrial devices.",
            "Automate production and validation workflows to reduce manual operations and improve data traceability.",
            "Develop custom Odoo ERP modules for Manufacturing, CRM, Project Management, production tracking, and scheduling.",
            "Maintain Linux-based development infrastructure, Docker environments, self-hosted Git services, NAS backup systems, and CI workflows.",
          ],
        },
      ],
    },
    {
      company: companies.sapienzaFastCharge,
      roles: [
        {
          title: "Team Leader",
          dateRange: "Oct 2026 - Present",
          bullets: [
          ],
        },
        {
          title: "Head of Business & Management",
          dateRange: "Sep 2025 - Oct 2026",
          bullets: [
            "Lead the Business & Management division, coordinating organizational, strategic, and operational activities.",
            "Manage sponsor relationships and support the development of technical and commercial partnerships.",
            "Contribute to project planning, resource allocation, and cross-functional team coordination.",
          ],
        },
        {
          title: "Social Media Manager",
          dateRange: "Sep 2025 - Sep 2026",
          bullets: [
            "Define and execute the team's communication strategy across multiple social media platforms.",
            "Create technical and promotional content highlighting engineering achievements and competition activities.",
            "Collaborate with sponsors and team members to improve online visibility and audience engagement.",
          ],
        },
        {
          title: "ADAS Technical Responsible",
          dateRange: "Oct 2024 - Sep 2026",
          bullets: [
            "Lead the development of the Software Architecture and Telemetry subsystems for an autonomous Formula Student race car.",
            "Coordinate software architecture decisions and technical planning within the ADAS division.",
            "Supervise the integration, testing, and validation of autonomous driving software components.",
            "Mentor team members and promote the development of reliable, maintainable, and hardware-compatible software.",
          ],
        },
        {
          title: "ADAS Software Engineer",
          dateRange: "Oct 2023 - Oct 2024",
          bullets: [
            "Developed software for an autonomous Formula Student race car, contributing to control, telemetry, and system integration.",
            "Designed and implemented ROS 2-based modular architectures for distributed communication between vehicle subsystems.",
            "Optimized real-time software with a focus on low-latency execution, reliability, and hardware compatibility.",
            "Deployed and validated software on NVIDIA Jetson AGX Orin, balancing computational load, communication efficiency, and safety requirements.",
          ],
        },
      ],
    },
  ],

  education: [
    {
      school: "Sapienza University of Rome",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2023 - 2026",
      achievements: [
        "Relevant coursework: Algorithms and Data Structures, Operating Systems, Computer Networks, Databases, Software Engineering, Artificial Intelligence.",
      ],
    },
  ],
};
