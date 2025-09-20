import type { DataType } from "@/types/types";
import {
  Camera,
  Music,
  Plane,
  Book,
  Code,
  Coffee,
  Cpu,
  BarChart3,
  Shield,
  Smartphone,
} from "lucide-react";

export const personalInfo: DataType = {
  skills: {
    frontendSkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
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
      companyLogo: "🚀",
      companyName: "DEPT",
      starting: "12-2023",
      ending: "Present",
      position: "Junior Software Developer",
      roleDescription:
        "As a Junior Backend Developer at DEPT, I work on building robust backend systems, creating RESTful APIs, and ensuring seamless integration with frontend technologies. I focus on optimizing performance, writing efficient SQL queries, and managing databases.",
      skillsUsed: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AEM",
        "Git",
        "BitBucket",
        "Jira",
        "ProofHub",
      ],
      responsibilities: [
        "Built and maintained responsive and dynamic web interfaces using JavaScript, React.js and AEM.",
        "Wrote and integrated complex calculator logic for financial tools.",
        "Optimized multiple pages to improve performance and loading speed.",
        "Worked on customer journey mapping and optimization.",
      ],
      location: "Mumbai, India",
      type: "Full-Time",
      gradient: "from-blue-600 via-purple-600 to-indigo-600",
      bgGradient:
        "from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10",
    },
    {
      companyLogo: "🚀",
      companyName: "LevelEdge Technologies",
      starting: "04-2023",
      ending: "09-2023",
      position: "Frontend DeveloperIntern",
      roleDescription:
        "As a Junior Backend Developer at DEPT, I work on building robust backend systems, creating RESTful APIs, and ensuring seamless integration with frontend technologies. I focus on optimizing performance, writing efficient SQL queries, and managing databases.",
      skillsUsed: ["HTML", "CSS", "JavaScript", "Git", "Wordpress"],
      responsibilities: [
        "Designed and Implementeda fully responsive website using HTML, CSS, JavaScript ensuring optimal performance across all devices.",
        "Optimized pages for performance, loading speed, and enhanced off-page SEO through blog and post submissions.",
        "Maintained Git repo for frontend team collaboration and streamlined deployment processes.",
        "Built and customized web pages in WordPress, utilizing plugins to add functionalities like form creation and validation for seamless user interactions.",
      ],
      location: "Mumbai, India (Virtual)",
      type: "Internship",
      gradient: "from-pink-600 via-rose-600 to-red-600",
      bgGradient:
        "from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/10 dark:via-teal-900/10 dark:to-cyan-900/10",
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
      icon: "⚛️",
    },
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce App",
      subTitle: "FullStack Web Application",
      description:
        "Built a full-fledged e-commerce API with Node.js and MongoDB, implementing user authentication, product management, and order processing.",
      image: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg",
      technologiesUsed: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
        {
          name: "MongoDB",
          icon: "🍃",
          color: "from-emerald-400 to-emerald-600",
        },
        { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
        { name: "Stripe", icon: "💳", color: "from-purple-400 to-purple-600" },
        { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
        { name: "Redis", icon: "🔴", color: "from-red-400 to-red-600" },
        { name: "OpenAI", icon: "🤖", color: "from-green-400 to-teal-500" },
        { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
      ],
      githubLink: "https://github.com/username/e-commerce-api",
      liveLink: "",
      category: "FullStack",
      highlights: [
        {
          title: "AI Recommendations",
          description: "Machine learning powered product suggestions",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          title: "Real-time Analytics",
          description: "Live dashboard with business insights",
          icon: <BarChart3 className="w-5 h-5" />,
        },
        {
          title: "Payment Gateway",
          description: "Secure multi-payment integration",
          icon: <Shield className="w-5 h-5" />,
        },
        {
          title: "Mobile Optimized",
          description: "Progressive web app with offline support",
          icon: <Smartphone className="w-5 h-5" />,
        },
      ],
      gradient: "from-blue-600 via-purple-600 to-pink-600",
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      subTitle: "",
      description:
        "Developed a real-time chat application using WebSockets (Socket.io), Express.js, and MongoDB. Integrated real-time message notifications.",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
      technologiesUsed: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
        {
          name: "MongoDB",
          icon: "🍃",
          color: "from-emerald-400 to-emerald-600",
        },
        { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
        { name: "Stripe", icon: "💳", color: "from-purple-400 to-purple-600" },
        { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
        { name: "Redis", icon: "🔴", color: "from-red-400 to-red-600" },
        { name: "OpenAI", icon: "🤖", color: "from-green-400 to-teal-500" },
        { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
      ],
      githubLink: "https://github.com/username/real-time-chat",
      liveLink: "",
      category: "",
      highlights: [
        {
          title: "AI Recommendations",
          description: "Machine learning powered product suggestions",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          title: "Real-time Analytics",
          description: "Live dashboard with business insights",
          icon: <BarChart3 className="w-5 h-5" />,
        },
        {
          title: "Payment Gateway",
          description: "Secure multi-payment integration",
          icon: <Shield className="w-5 h-5" />,
        },
        {
          title: "Mobile Optimized",
          description: "Progressive web app with offline support",
          icon: <Smartphone className="w-5 h-5" />,
        },
      ],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      subTitle: "",
      description:
        "Developed a real-time chat application using WebSockets (Socket.io), Express.js, and MongoDB. Integrated real-time message notifications.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      technologiesUsed: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
        {
          name: "MongoDB",
          icon: "🍃",
          color: "from-emerald-400 to-emerald-600",
        },
        { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
        { name: "Stripe", icon: "💳", color: "from-purple-400 to-purple-600" },
        { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
        { name: "Redis", icon: "🔴", color: "from-red-400 to-red-600" },
        { name: "OpenAI", icon: "🤖", color: "from-green-400 to-teal-500" },
        { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
      ],
      githubLink: "https://github.com/username/real-time-chat",
      liveLink: "",
      category: "",
      highlights: [
        {
          title: "AI Recommendations",
          description: "Machine learning powered product suggestions",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          title: "Real-time Analytics",
          description: "Live dashboard with business insights",
          icon: <BarChart3 className="w-5 h-5" />,
        },
        {
          title: "Payment Gateway",
          description: "Secure multi-payment integration",
          icon: <Shield className="w-5 h-5" />,
        },
        {
          title: "Mobile Optimized",
          description: "Progressive web app with offline support",
          icon: <Smartphone className="w-5 h-5" />,
        },
      ],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
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
