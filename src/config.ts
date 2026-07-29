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
    "Software Engineer passionate about embedded systems, autonomous vehicles, artificial intelligence, and industrial software development. I currently work at Fast Charge Engineering, where I develop embedded software, automated testing solutions, CAN-based diagnostic tools, and custom ERP applications. I am also the ADAS Technical Responsible of the Sapienza Fast Charge Formula Student Electric Team, leading the development of Software Architecture and Telemetry software for an autonomous Formula Student race car. Alongside my professional experience, I am pursuing a Bachelor's degree in Computer Science at Sapienza University of Rome. I enjoy designing reliable, efficient software that bridges hardware, data, and real-world applications.",

  skills: [
    "C",
    "C++",
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
        "Python",
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
    {
      company: companies.sapienzaFastCharge,
      title: "Head of Business & Management",
      dateRange: "Sep 2025 - Present",
      bullets: [
        "Lead the Business & Management division, coordinating organizational, strategic, and operational activities.",
        "Manage sponsor relationships and support the development of technical and commercial partnerships.",
        "Contribute to project planning, resource allocation, and cross-functional team coordination.",
      ],
    },
    {
      company: companies.sapienzaFastCharge,
      title: "Social Media Manager",
      dateRange: "Sep 2025 - Present",
      bullets: [
        "Define and execute the team's communication strategy across multiple social media platforms.",
        "Create technical and promotional content highlighting engineering achievements and competition activities.",
        "Collaborate with sponsors and team members to improve online visibility and audience engagement.",
      ],
    },
    {
      company: companies.sapienzaFastCharge,
      title: "ADAS Technical Responsible",
      dateRange: "Oct 2024 - Present",
      bullets: [
        "Lead the development of the Software Architecture and Telemetry subsystems for an autonomous Formula Student race car.",
        "Coordinate software architecture decisions and technical planning within the ADAS division.",
        "Supervise the integration, testing, and validation of autonomous driving software components.",
        "Mentor team members and promote the development of reliable, maintainable, and hardware-compatible software.",
      ],
    },
    {
      company: companies.sapienzaFastCharge,
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
