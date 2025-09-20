"use client";
import DataContext from "@/contexts/DataContext";
import { Github, Code, Rocket, Globe } from "lucide-react";
import React, { useContext, useEffect } from "react";

export default function Projects() {
  //   const projects = [
  //     {
  //       id: 1,
  //       title: "E-Commerce Platform Revolution",
  //       subtitle: "Next-Gen Shopping Experience",
  //       description:
  //         "A comprehensive e-commerce platform built with modern technologies, featuring AI-powered recommendations, real-time inventory management, and seamless payment integration. This platform serves over 100K+ active users with 99.9% uptime.",
  //       image: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg",
  //       technologies: [
  //         { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
  //         { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
  //         {
  //           name: "MongoDB",
  //           icon: "🍃",
  //           color: "from-emerald-400 to-emerald-600",
  //         },
  //         { name: "Stripe", icon: "💳", color: "from-purple-400 to-purple-600" },
  //         { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
  //         { name: "Redis", icon: "🔴", color: "from-red-400 to-red-600" },
  //       ],
  //       github: "https://github.com",
  //       live: "https://example.com",
  //       category: "Full Stack",
  //       highlights: [
  //         {
  //           title: "AI Recommendations",
  //           description: "Machine learning powered product suggestions",
  //           icon: <Cpu className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Real-time Analytics",
  //           description: "Live dashboard with business insights",
  //           icon: <BarChart3 className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Payment Gateway",
  //           description: "Secure multi-payment integration",
  //           icon: <Shield className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Mobile Optimized",
  //           description: "Progressive web app with offline support",
  //           icon: <Smartphone className="w-5 h-5" />,
  //         },
  //       ],
  //       gradient: "from-blue-600 via-purple-600 to-pink-600",
  //     },
  //     {
  //       id: 2,
  //       title: "AI-Powered Task Manager",
  //       subtitle: "Smart Productivity Suite",
  //       description:
  //         "Intelligent project management platform with AI-driven task prioritization, team collaboration tools, and predictive analytics. Helps teams increase productivity by 40% through smart automation.",
  //       longDescription:
  //         "Revolutionary task management system that leverages artificial intelligence to optimize team productivity. Features intelligent task scheduling, automated progress tracking, and predictive project completion estimates.",
  //       image:
  //         "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
  //       technologies: [
  //         { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  //         { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
  //         {
  //           name: "PostgreSQL",
  //           icon: "🐘",
  //           color: "from-blue-400 to-indigo-600",
  //         },
  //         {
  //           name: "Socket.io",
  //           icon: "⚡",
  //           color: "from-yellow-400 to-orange-500",
  //         },
  //         { name: "OpenAI", icon: "🤖", color: "from-green-400 to-teal-500" },
  //         { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
  //       ],
  //       github: "https://github.com",
  //       live: "https://example.com",
  //       featured: true,
  //       status: "Live",
  //       category: "SaaS Platform",
  //       timeline: "4 months",
  //       team: "5 developers",
  //       role: "Full Stack Developer",
  //       metrics: {
  //         users: "25K+",
  //         revenue: "$800K",
  //         performance: "99.5%",
  //         rating: 4.8,
  //         downloads: "15K+",
  //         stars: 892,
  //       },
  //       highlights: [
  //         {
  //           title: "AI Task Prioritization",
  //           description: "Smart algorithms for optimal task ordering",
  //           icon: <Cpu className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Real-time Collaboration",
  //           description: "Live editing and team communication",
  //           icon: <Users className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Predictive Analytics",
  //           description: "Project completion forecasting",
  //           icon: <TrendingUp className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Cross-platform Sync",
  //           description: "Seamless sync across all devices",
  //           icon: <Cloud className="w-5 h-5" />,
  //         },
  //       ],
  //       achievements: [
  //         { label: "Productivity Boost", value: "+40%", color: "text-green-600" },
  //         { label: "Task Completion", value: "95%", color: "text-blue-600" },
  //         { label: "User Retention", value: "88%", color: "text-purple-600" },
  //         { label: "Response Time", value: "0.8s", color: "text-orange-600" },
  //       ],
  //       gradient: "from-emerald-600 via-teal-600 to-cyan-600",
  //     },
  //     {
  //       id: 3,
  //       title: "Real-time Analytics Dashboard",
  //       subtitle: "Business Intelligence Platform",
  //       description:
  //         "Comprehensive analytics platform with real-time data visualization, custom reporting, and predictive insights. Processes millions of data points daily with sub-second query performance.",
  //       longDescription:
  //         "Enterprise-grade analytics solution that transforms raw data into actionable business insights. Features advanced data visualization, custom dashboard creation, and machine learning-powered predictions.",
  //       image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
  //       technologies: [
  //         { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
  //         { name: "D3.js", icon: "📊", color: "from-orange-400 to-red-500" },
  //         { name: "Python", icon: "🐍", color: "from-yellow-400 to-green-500" },
  //         { name: "FastAPI", icon: "⚡", color: "from-green-400 to-teal-500" },
  //         {
  //           name: "ClickHouse",
  //           icon: "🏠",
  //           color: "from-yellow-500 to-orange-500",
  //         },
  //         {
  //           name: "Kubernetes",
  //           icon: "⚙️",
  //           color: "from-blue-500 to-purple-500",
  //         },
  //       ],
  //       github: "https://github.com",
  //       live: "https://example.com",
  //       featured: false,
  //       status: "Live",
  //       category: "Data Analytics",
  //       timeline: "5 months",
  //       team: "6 developers",
  //       role: "Frontend Lead",
  //       metrics: {
  //         users: "15K+",
  //         revenue: "$1.2M",
  //         performance: "99.8%",
  //         rating: 4.7,
  //         downloads: "8K+",
  //         stars: 567,
  //       },
  //       highlights: [
  //         {
  //           title: "Real-time Processing",
  //           description: "Live data streaming and visualization",
  //           icon: <Zap className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Custom Dashboards",
  //           description: "Drag-and-drop dashboard builder",
  //           icon: <Monitor className="w-5 h-5" />,
  //         },
  //         {
  //           title: "ML Predictions",
  //           description: "AI-powered business forecasting",
  //           icon: <TrendingUp className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Enterprise Security",
  //           description: "SOC2 compliant data protection",
  //           icon: <Shield className="w-5 h-5" />,
  //         },
  //       ],
  //       achievements: [
  //         { label: "Data Points/Day", value: "10M+", color: "text-green-600" },
  //         { label: "Query Speed", value: "0.3s", color: "text-blue-600" },
  //         { label: "Accuracy Rate", value: "99.2%", color: "text-purple-600" },
  //         { label: "Uptime", value: "99.8%", color: "text-orange-600" },
  //       ],
  //       gradient: "from-purple-600 via-pink-600 to-red-600",
  //     },
  //     {
  //       id: 4,
  //       title: "Blockchain Voting System",
  //       subtitle: "Secure Digital Democracy",
  //       description:
  //         "Decentralized voting platform built on blockchain technology ensuring transparency, security, and immutability. Successfully deployed for multiple organizations with zero security incidents.",
  //       longDescription:
  //         "Revolutionary voting system that leverages blockchain technology to ensure election integrity. Features end-to-end encryption, voter anonymity, and real-time result verification.",
  //       image:
  //         "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
  //       technologies: [
  //         { name: "Solidity", icon: "⬢", color: "from-gray-600 to-gray-800" },
  //         { name: "Web3.js", icon: "🌐", color: "from-orange-400 to-yellow-500" },
  //         { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
  //         { name: "IPFS", icon: "🗂️", color: "from-teal-400 to-cyan-500" },
  //         { name: "MetaMask", icon: "🦊", color: "from-orange-500 to-red-500" },
  //         { name: "Hardhat", icon: "⚒️", color: "from-yellow-600 to-orange-600" },
  //       ],
  //       github: "https://github.com",
  //       live: "https://example.com",
  //       featured: false,
  //       status: "Live",
  //       category: "Blockchain",
  //       timeline: "7 months",
  //       team: "4 developers",
  //       role: "Blockchain Developer",
  //       metrics: {
  //         users: "5K+",
  //         revenue: "$400K",
  //         performance: "100%",
  //         rating: 4.9,
  //         downloads: "2K+",
  //         stars: 234,
  //       },
  //       highlights: [
  //         {
  //           title: "Zero Trust Security",
  //           description: "Cryptographic vote verification",
  //           icon: <Shield className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Transparent Results",
  //           description: "Public blockchain verification",
  //           icon: <Eye className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Voter Privacy",
  //           description: "Anonymous voting with ZK proofs",
  //           icon: <Users className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Immutable Records",
  //           description: "Tamper-proof vote storage",
  //           icon: <Database className="w-5 h-5" />,
  //         },
  //       ],
  //       achievements: [
  //         { label: "Security Score", value: "100%", color: "text-green-600" },
  //         { label: "Votes Processed", value: "50K+", color: "text-blue-600" },
  //         { label: "Gas Efficiency", value: "85%", color: "text-purple-600" },
  //         { label: "Audit Score", value: "A+", color: "text-orange-600" },
  //       ],
  //       gradient: "from-indigo-600 via-blue-600 to-purple-600",
  //     },
  //     {
  //       id: 5,
  //       title: "Social Media Analytics Suite",
  //       subtitle: "Comprehensive Social Intelligence",
  //       description:
  //         "Advanced social media monitoring and analytics platform with sentiment analysis, competitor tracking, and automated reporting. Serves 500+ brands worldwide.",
  //       longDescription:
  //         "Comprehensive social media intelligence platform that provides deep insights into brand performance, audience sentiment, and competitive landscape across all major social platforms.",
  //       image: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg",
  //       technologies: [
  //         { name: "Vue.js", icon: "💚", color: "from-green-400 to-emerald-500" },
  //         { name: "Python", icon: "🐍", color: "from-yellow-400 to-green-500" },
  //         { name: "TensorFlow", icon: "🧠", color: "from-orange-400 to-red-500" },
  //         {
  //           name: "Elasticsearch",
  //           icon: "🔍",
  //           color: "from-yellow-500 to-orange-500",
  //         },
  //         {
  //           name: "Apache Kafka",
  //           icon: "📡",
  //           color: "from-gray-600 to-gray-800",
  //         },
  //         { name: "Chart.js", icon: "📈", color: "from-pink-400 to-purple-500" },
  //       ],
  //       github: "https://github.com",
  //       live: "https://example.com",
  //       featured: false,
  //       status: "Live",
  //       category: "Analytics",
  //       timeline: "8 months",
  //       team: "7 developers",
  //       role: "Data Engineer",
  //       metrics: {
  //         users: "10K+",
  //         revenue: "$1.5M",
  //         performance: "99.7%",
  //         rating: 4.6,
  //         downloads: "12K+",
  //         stars: 445,
  //       },
  //       highlights: [
  //         {
  //           title: "Sentiment Analysis",
  //           description: "AI-powered emotion detection",
  //           icon: <Heart className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Multi-platform Sync",
  //           description: "All major social networks",
  //           icon: <Globe className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Automated Reports",
  //           description: "Scheduled insights delivery",
  //           icon: <Clock className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Competitor Tracking",
  //           description: "Real-time competitive analysis",
  //           icon: <Target className="w-5 h-5" />,
  //         },
  //       ],
  //       achievements: [
  //         { label: "Posts Analyzed", value: "1M+", color: "text-green-600" },
  //         { label: "Accuracy Rate", value: "94%", color: "text-blue-600" },
  //         { label: "Brands Served", value: "500+", color: "text-purple-600" },
  //         { label: "Data Sources", value: "15+", color: "text-orange-600" },
  //       ],
  //       gradient: "from-pink-600 via-rose-600 to-orange-600",
  //     },
  //     {
  //       id: 6,
  //       title: "Cloud Infrastructure Manager",
  //       subtitle: "DevOps Automation Platform",
  //       description:
  //         "Comprehensive cloud infrastructure management platform with automated deployments, monitoring, and cost optimization. Manages $2M+ in cloud resources across multiple providers.",
  //       longDescription:
  //         "Enterprise-grade infrastructure management solution that automates cloud operations, optimizes costs, and ensures high availability across multi-cloud environments.",
  //       image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
  //       technologies: [
  //         {
  //           name: "Terraform",
  //           icon: "🏗️",
  //           color: "from-purple-500 to-indigo-600",
  //         },
  //         {
  //           name: "Kubernetes",
  //           icon: "⚙️",
  //           color: "from-blue-500 to-purple-500",
  //         },
  //         { name: "Go", icon: "🐹", color: "from-cyan-400 to-blue-500" },
  //         { name: "Prometheus", icon: "🔥", color: "from-orange-500 to-red-500" },
  //         { name: "Grafana", icon: "📊", color: "from-orange-400 to-yellow-500" },
  //         { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
  //       ],
  //       github: "https://github.com",
  //       live: "https://example.com",
  //       featured: false,
  //       status: "Live",
  //       category: "DevOps",
  //       timeline: "6 months",
  //       team: "3 developers",
  //       role: "DevOps Engineer",
  //       metrics: {
  //         users: "2K+",
  //         revenue: "$600K",
  //         performance: "99.9%",
  //         rating: 4.8,
  //         downloads: "5K+",
  //         stars: 178,
  //       },
  //       highlights: [
  //         {
  //           title: "Auto Scaling",
  //           description: "Dynamic resource allocation",
  //           icon: <Layers className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Cost Optimization",
  //           description: "30% reduction in cloud costs",
  //           icon: <TrendingUp className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Multi-cloud Support",
  //           description: "AWS, GCP, Azure integration",
  //           icon: <Cloud className="w-5 h-5" />,
  //         },
  //         {
  //           title: "Zero Downtime",
  //           description: "Blue-green deployment strategy",
  //           icon: <CheckCircle className="w-5 h-5" />,
  //         },
  //       ],
  //       achievements: [
  //         { label: "Cost Savings", value: "30%", color: "text-green-600" },
  //         { label: "Deployment Speed", value: "10x", color: "text-blue-600" },
  //         { label: "Uptime", value: "99.9%", color: "text-purple-600" },
  //         { label: "Resources Managed", value: "$2M+", color: "text-orange-600" },
  //       ],
  //       gradient: "from-cyan-600 via-blue-600 to-indigo-600",
  //     },
  //   ];

  const { data } = useContext(DataContext);
  const projects = data.projects;
  const techStack = [
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "MongoDB",
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br dark:from-slate-50 dark:via-blue-50 dark:to-indigo-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 dark:bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-white/20">
              <Rocket className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold dark:text-gray-700">
                Featured Work
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r dark:from-gray-900 dark:via-blue-800 dark:to-indigo-900 bg-clip-text text-transparent">
              Projects
            </h2>

            <p className="text-xl dark:text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              A showcase of innovative solutions, cutting-edge technologies, and
              impactful results across various domains
            </p>
          </div>

          {/* Other Projects Grid */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group dark:bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="dark:bg-white/90 dark:text-gray-800 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 dark:text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold dark:text-blue-600 mb-2">
                        {project.subTitle}
                      </p>
                      <p className="dark:text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2">
                        {project.highlights
                          .slice(0, 4)
                          .map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-xs dark:text-gray-600"
                            >
                              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white flex items-center justify-center flex-shrink-0">
                                {React.cloneElement(highlight.icon, {
                                  className: "w-2 h-2",
                                })}
                              </div>
                              <span className="truncate">
                                {highlight.title}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologiesUsed.map((tech, idx) => (
                          <span
                            key={idx}
                            className="flex items-center gap-1 px-2 py-1 dark:bg-gray-300 dark:text-black text-xs rounded-full font-medium"
                          >
                            <span>{tech.icon}</span>
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveLink}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 font-semibold transition-all duration-200 transform hover:scale-105 text-sm shadow-lg"
                      >
                        <Globe className="w-4 h-4" />
                        Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 dark:bg-gray-800 text-white rounded-xl dark:hover:bg-gray-900 font-semibold transition-all duration-200 transform hover:scale-105 text-sm shadow-lg"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Section */}
          <div className="dark:bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold dark:text-gray-900 mb-4 flex items-center justify-center gap-3">
                <Code className="w-8 h-8 text-blue-600" />
                Technology Stack
              </h3>
              <p className=" dark:text-gray-600 max-w-2xl mx-auto">
                The cutting-edge technologies and tools I use to bring ideas to
                life
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group px-6 py-3 bg-gradient-to-r dark:from-gray-100 dark:to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border dark:border-gray-200"
                >
                  <span className="font-semibold dark:text-gray-800 group-hover:text-blue-600 transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
