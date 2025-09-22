"use client";
import DataContext from "@/contexts/DataContext";
import {
  Github,
  Rocket,
  Globe,
  ShieldCheck,
  LayoutDashboard,
  Users,
  ShoppingCart,
  Cpu,
  CalendarClock,
  Folder,
  Smartphone,
  Code,
  Zap,
  FileText,
  Dice3,
  MousePointerClick,
  RefreshCcw,
  Timer,
} from "lucide-react";
import React, { useContext } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const { data, loading } = useContext(DataContext);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  const projects = data.projects;
  // const techStack = [
  //   "React.js",
  //   "TypeScript",
  //   "Node.js",
  //   "Python",
  //   "MongoDB",
  //   "Docker",
  // ];

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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
                From idea to execution — A deep dive into the systems I've
                designed, coded, and deployed using modern web technologies.
              </p>
            </div>
          </motion.div>
          {/* Other Projects Grid */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  key={project.id}
                >
                  <div className="group dark:bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20">
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
                          {project.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-xs dark:text-gray-600"
                            >
                              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white flex items-center justify-center flex-shrink-0">
                                {typeof highlight.icon === "string" ? (
                                  highlight.icon === "LayoutDashboard" ? (
                                    <LayoutDashboard className="w-8 h-8" />
                                  ) : highlight.icon === "Users" ? (
                                    <Users className="w-8 h-8" />
                                  ) : highlight.icon === "ShoppingCart" ? (
                                    <ShoppingCart className="w-8 h-8" />
                                  ) : highlight.icon === "ShieldCheck" ? (
                                    <ShieldCheck className="w-8 h-8" />
                                  ) : highlight.icon === "Cpu" ? (
                                    <Cpu className="w-8 h-8" />
                                  ) : highlight.icon === "CalendarClock" ? (
                                    <CalendarClock className="w-8 h-8" />
                                  ) : highlight.icon === "Folder" ? (
                                    <Folder className="w-8 h-8" />
                                  ) : highlight.icon === "Smartphone" ? (
                                    <Smartphone className="w-8 h-8" />
                                  ) : highlight.icon === "Code" ? (
                                    <Code className="w-8 h-8" />
                                  ) : highlight.icon === "Zap" ? (
                                    <Zap className="w-8 h-8" />
                                  ) : highlight.icon === "Dice3" ? (
                                    <Dice3 className="w-8 h-8" />
                                  ) : highlight.icon === "MousePointerClick" ? (
                                    <MousePointerClick className="w-8 h-8" />
                                  ) : highlight.icon === "RefreshCcw" ? (
                                    <RefreshCcw className="w-8 h-8" />
                                  ) : highlight.icon === "Timer" ? (
                                    <Timer className="w-8 h-8" />
                                  ) : highlight.icon === "FileText" ? (
                                    <FileText className="w-8 h-8" />
                                  ) : null
                                ) : null}
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
                          Live
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technology Stack Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="dark:bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold dark:text-gray-900 mb-4 flex items-center justify-center gap-3">
                  <Code className="w-8 h-8 text-blue-600" />
                  Technology Stack
                </h3>
                <p className=" dark:text-gray-600 max-w-2xl mx-auto">
                  The cutting-edge technologies and tools I use to bring ideas
                  to life
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
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
