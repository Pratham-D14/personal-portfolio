import type { DataType } from "@/types/types";
import {
  Camera,
  Music,
  Plane,
  Book,
  Code,
  Coffee,
  Cpu,
  Smartphone,
  Folder,
  CalendarClock,
  Zap,
  FileText,
  ShoppingCart,
  LayoutDashboard,
  Users,
  ShieldCheck,
  Dice3,
  MousePointerClick,
  RefreshCcw,
  Timer,
  Dumbbell,
  Network,
} from "lucide-react";
import { GrTechnology } from "react-icons/gr";

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
        "As a Junior Software Developer at DEPT, I work on building and maintaining web applications with a focus on clean, scalable code. I focus on optimizing page performance to improve load speeds and Core Web Vitals.",
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
        "Built and maintained responsive and dynamic web interfaces using JavaScript, React.js, Node.js and AEM.",
        "Wrote and integrated complex calculator logic for financial tools enhancing accuracy and usability.",
        "Optimized multiple pages to improve performance and loading speed by passing CWV for multiple pages.",
        "Worked on customer journey mapping and optimization to enhance user experience",
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
        "As a Frontend Developer Intern at Leveledge I haved worked on building responsive and interactive web interfaces using HTML, CSS, and JavaScript. I assisted in implementing UI components, optimizing website performance. I also collaborated with the team to troubleshoot issues, refine designs, and improve overall user experience.",
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
      subTitle: "Shop smarter, checkout faster",
      description:
        "Built a secure E-Commerce platform using the MERN stack, featuring JWT-based authentication and a dynamic admin panel for efficient data and user management.",
      image:
        "https://www.servcorp.co.uk/media/34561/e-commerce-img.jpeg?format=webp&quality=70&width=688",
      technologiesUsed: [
        {
          name: "JavaScript",
          icon: "🟨",
          color: "from-yellow-300 to-yellow-500",
        },
        { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
        {
          name: "MongoDB",
          icon: "🍃",
          color: "from-emerald-400 to-emerald-600",
        },
        { name: "JWT", icon: "🔐", color: "from-yellow-400 to-orange-500" },
        { name: "REST API", icon: "🌐", color: "from-teal-400 to-blue-600" },
      ],
      githubLink: "https://github.com/Pratham-D14/E-Commerce",
      liveLink: "https://pratham-d14.github.io/E-Commerce/",
      category: "FullStack",
      highlights: [
        {
          title: "Dynamic Admin Panel",
          icon: <LayoutDashboard className="w-5 h-5" />,
        },
        {
          title: "Secure Authentication",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
        {
          title: "User Management",
          icon: <Users className="w-5 h-5" />,
        },
        {
          title: "Accessible Shopping Cart",
          icon: <ShoppingCart className="w-5 h-5" />,
        },
      ],
      gradient: "from-blue-600 via-purple-600 to-pink-600",
    },
    {
      id: 2,
      title: "Smart Todo",
      subTitle: "Organize smarter, finish faster",
      description:
        "Smart Todo is an AI-powered task manager that lets users organize tasks by category and timeline, with smart suggestions to boost productivity",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
      technologiesUsed: [
        { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
        { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
        { name: "Pyhton", icon: "🐍", color: "from-green-400 to-green-600" },
        { name: "OpenAI", icon: "🤖", color: "from-green-400 to-teal-500" },
        { name: "REST API", icon: "🌐", color: "from-teal-400 to-blue-600" },
      ],
      githubLink: "https://github.com/Pratham-D14/Smart-Todo",
      liveLink: "https://smart-todo-six.vercel.app/",
      category: "Fullstack",
      highlights: [
        {
          title: "AI Recommendations",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          title: "Timeline Tracking",
          icon: <CalendarClock className="w-5 h-5" />,
        },
        {
          title: "Task Categorization ",
          icon: <Folder className="w-5 h-5" />,
        },
        {
          title: "Mobile Friendly",
          icon: <Smartphone className="w-5 h-5" />,
        },
      ],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    },
    {
      id: 3,
      title: "Online Code Editor",
      subTitle: "Code, run, and test instantly",
      description:
        "An online code editor where users can write, run, and test JavaScript, Java, and Python code instantly—no installation required.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      technologiesUsed: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
        { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
        { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
        { name: "Java", icon: "☕", color: "from-red-500 to-yellow-500" },
        { name: "Python", icon: "🐍", color: "from-yellow-300 to-blue-600" },
      ],
      githubLink: "https://github.com/Pratham-D14/online-code-editor",
      liveLink: "",
      category: "FullStack",
      highlights: [
        {
          title: "Multi-Language Support",
          icon: <Code className="w-5 h-5" />,
        },
        {
          title: "Instant Execution",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Interactive Editor",
          icon: <FileText className="w-5 h-5" />,
        },
        {
          title: "Cross-Platform",
          icon: <Smartphone className="w-5 h-5" />,
        },
      ],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    },
    {
      id: 4,
      title: "Guess The Number",
      subTitle: "Classic number guessing game",
      description:
        "A simple number guessing game built to demonstrate basic logic, state management, and user interaction.",
      image: "https://screenshots.codesandbox.io/rcfz2/0.png",
      technologiesUsed: [
        { name: "HTML", icon: "📄", color: "from-orange-400 to-red-500" },
        { name: "CSS", icon: "🎨", color: "from-blue-400 to-indigo-500" },
        {
          name: "JavaScript",
          icon: "🟨",
          color: "from-yellow-300 to-yellow-500",
        },
      ],
      githubLink: "https://github.com/Pratham-D14/Guess-The-Number-",
      liveLink: "https://pratham-d14.github.io/Guess-The-Number-/",
      category: "Frontend",
      highlights: [
        {
          title: "Random Number Generation",
          icon: <Dice3 className="w-5 h-5" />,
        },
        {
          title: "Interactive UI",
          icon: <MousePointerClick className="w-5 h-5" />,
        },
        {
          title: "Play Again Logic",
          icon: <RefreshCcw className="w-5 h-5" />,
        },
        {
          title: "Guess Attempt Tracking",
          icon: <Timer className="w-5 h-5" />,
        },
      ],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    },
  ],
  interest: [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Sports & Fitness",
      description:
        "Staying active through sports keeps me energized and disciplined. Whether it’s football, cricket, or a workout session.",
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Continuous Learning",
      description:
        "I believe growth comes from never stopping the learning process. From books to new technologies, currently exploring AI/ML.",
    },
    {
      icon: <GrTechnology className="w-8 h-8" />,
      title: "Technology Exploration",
      description:
        "I’m fascinated by new technologies and love to explore and understand how it works and impact real word",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel",
      description:
        "Traveling helps me step outside of my comfort zone and fuels my creativity. Exploring new places and cultures inspires me with fresh perspectives.",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description:
        "I enjoy capturing moments through landscape and street photography during my travels, turning everyday scenes into lasting memories.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking & Community",
      description:
        "I enjoy connecting with like-minded people, sharing ideas, and being part of communities that encourage growth and collaboration .",
    },
  ],
};
