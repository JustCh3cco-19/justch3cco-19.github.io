export const siteConfig = {
  name: "Francesco Zompanti",
  title: "Software Engineer & Computer Science Student",
  description: "Portfolio website of Francesco Zompanti",
  accentColor: "#d81d1dff",
  social: {
    email: "zompantifrancesco@gmail.com",
    linkedin: "https://linkedin.com/in/francesco-zompanti",
    github: "https://github.com/JustCh3cco-19",
  },
  aboutMe:
    "Engineering motorsport speed with code and smart solutions. Software Engineer in the ADAS division of Sapienza Fast Charge Formula Student Electric team of Sapienza University of Rome where I bring an autonomous race car to life. Currently pursing a degree in Computer Science, I combine my passion for motorsport, software engineering, and data analysis to drive performance, both on the track and in the codebase to enhance the performances. From developing algorithms for autonomous driving to analyzing telemetry data, I can improve codes and methods to enhance the software.",
  skills: ["C", "C++", "Python", "Java", "MATLAB", "Simulink", "HTML", "CSS", "JavaScript", "PHP", "Bash", "Git", "Linux", "Docker", "ROS2"],
  projects: [
    {
      name: "Client-Server Architecture in C Programming Language",
      description:
        "Secure, multithreaded client-server file transfer in C: 64-bit XOR encryption, TCP sockets, concurrent connections, POSIX threads, robust protocol and error handling",
      link: "https://github.com/JustCh3cco-19/system-programming",
      skills: ["C", "Networking", "Linux", "Operating Systems"],
    },
    {
      name: "Preprocessor in C Programming Language",
      description:
        "A modular C preprocessor for source code analysis: supports recursive #include expansion, comment removal, identifier validation, and detailed logging. Robust error handling and fully tested",
      link: "https://github.com/JustCh3cco-19/myPreCompiler",
      skills: ["C", "Linux", "Operating Systems"],
    },
    {
      name: "Microservices Architecture",
      description:
        "A simulated autonomous system using a microservices architecture, where each service (computer vision, SLAM, path planning, and high-level control) runs in its own Docker container and communicates via RabbitMQ. This repository demonstrates modular design and message-based communication in Python for educational and prototyping purposes.",
      link: "https://github.com/JustCh3cco-19/microservices-architetcture",
      skills: ["Python", "Linux", "Docker", "RabbitMQ"],
    },
  ],
  experience: [
    {
      company: "Sapienza Fast Charge Formula Student Electric Team",
      title: "Software Engineer",
      dateRange: "Dec 2023 - Present",
      bullets: [
        "Software development for a self‑driving car competing in the Formula Student championship",
        "Designed and developed ROS2‑based modular architectures for distributed control of autonomous vehicle subsystems",
        "Developed real‑time solutions with strong focus on performance optimization and hardware compatibility",
        "Deployment and validation on NVIDIA Jetson AGX Orin, balancing computational load, communication, and safety requirements",
      ],
    },
  ],
  education: [
    {
      school: "Sapienza University of Rome",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2023 - 2026",
      achievements: [
        //"Graduated Magna Cum Laude with 3.8 GPA",
        //"Dean's List all semesters",
        //"President of Computer Science Club",
      ],
    },
  ],
};
