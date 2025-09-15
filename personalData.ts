import type { DataType } from "@/types/types";

export const personalInfo: DataType = {
  skills: {
    frontendSkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Typescript",
      "AEM",
    ],
    backendSkills: [
      "Node.js",
      "Express.js",
      "NoSQL (MongoDB)",
      "JWT (JSON Web Tokens)",
      "API Design & Development",
    ],
    softSkills: [
      "Problem-solving",
      "Team collaboration",
      "Team Management & Leadership",
      "Communication",
      "Adaptability",
    ],
  },
  workExperience: [
    {
      companyName: "DEPT",
      starting: "12-2023",
      ending: "Present",
      position: "Junior Backend Developer",
      roleDescription:
        "As a Junior Backend Developer at DEPT, I work on building robust backend systems, creating RESTful APIs, and ensuring seamless integration with frontend technologies. I focus on optimizing performance, writing efficient SQL queries, and managing databases.",
      skillsUsed: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AEM",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      university: "XYZ University",
      starting: "08-2019",
      ending: "05-2023",
      description:
        "I pursued my undergraduate degree in Computer Science, focusing on web technologies, algorithms, and systems programming.",
      subjects: [
        "Data Structures",
        "Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Software Engineering",
      ],
      gpa: "3.85/4.0",
    },
  ],
  certification: [
    {
      name: "Node.js Certified Developer",
      provider: "Node University",
      link: "https://www.nodeuniversity.com/certificate/12345",
    },
    {
      name: "Docker Essentials",
      provider: "Docker Academy",
      link: "https://www.dockeracademy.com/certificate/abc123",
    },
  ],
  projects: [
    {
      title: "E-commerce API",
      description:
        "Built a full-fledged e-commerce API with Node.js and MongoDB, implementing user authentication, product management, and order processing.",
      technologiesUsed: ["Node.js", "Express.js", "MongoDB", "JWT", "Docker"],
      githubLink: "https://github.com/username/e-commerce-api",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Developed a real-time chat application using WebSockets (Socket.io), Express.js, and MongoDB. Integrated real-time message notifications.",
      technologiesUsed: ["Node.js", "Express.js", "Socket.io", "MongoDB"],
      githubLink: "https://github.com/username/real-time-chat",
    },
  ],
};
