import type { DataType } from "@/types/types";
import { Camera, Music, Plane, Book, Code, Coffee } from "lucide-react";

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
    {
      companyName: "LevelEdge Technologies",
      starting: "04-2023",
      ending: "09-2023",
      position: "Frontend DeveloperIntern",
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
      university: "NK College, Mumbai University",
      starting: "2021",
      ending: "2024",
      description:
        "I pursued my undergraduate degree in Computer Science, focusing on web technologies, algorithms, and systems programming.",
      courses: [
        "Data Structures",
        "Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Software Engineering",
      ],
      gpa: "3.3 / 4.0",
      location: "Mumbai",
    },
  ],
  certification: [
    {
      name: "React.js Certified Developer",
      provider: "Geeks for Geeks",
      link: "https://drive.google.com/file/d/1fU4_qYqKjYIJOf0RmEm622BPQG0DcHFI/view?usp=sharing",
      date: "2025",
      icon: "🚀",
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
  interest: [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Source",
      description:
        "Contributing to open source projects and maintaining several repositories on GitHub.",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description:
        "Capturing moments through landscape and street photography during travels.",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Production",
      description:
        "Creating electronic music and experimenting with sound design in my spare time.",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel",
      description:
        "Exploring new cultures and technologies around the world, visited 25+ countries.",
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Learning",
      description:
        "Always learning new technologies, currently exploring AI/ML and blockchain development.",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Coffee Brewing",
      description:
        "Passionate about specialty coffee and perfecting the art of manual brewing methods.",
    },
  ],
};
