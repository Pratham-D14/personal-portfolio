"use client";
import DataContext from "@/contexts/DataContext";
import {
  Calendar,
  MapPin,
  Building,
  Users,
  ChevronRight,
  Star,
  Briefcase,
  Clock,
  Trophy,
  Target,
  CodeXml,
} from "lucide-react";
import { useContext } from "react";

export default function Experience() {
  const { data } = useContext(DataContext);
  const experiences = data.workExperience;

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br dark:from-gray-50 dark:via-white dark:to-gray-100 relative overflow-hidden text-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 dark:bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-700">
                Professional Journey
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Work{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              A journey through innovative companies, challenging projects, and
              continuous growth in the tech industry
            </p>

            {/* Career Highlights */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="group dark:bg-bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold dark:text-gray-900 mb-2">
                  2+
                </div>
                <div className="dark:text-gray-600">Years Experience</div>
              </div>

              <div className="group dark:bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CodeXml className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold dark:text-gray-900 mb-2">
                  5+
                </div>
                <div className="dark:text-gray-600">
                  Technologies, Languages, and Frameworks I have gained
                  experience with.
                </div>
              </div>

              <div className="group dark:bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold dark:text-gray-900 mb-2">
                  3+
                </div>
                <div className="dark:text-gray-600">Team Collabration</div>
              </div>

              {/* <div className="group dark:bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold dark:text-gray-900 mb-2">
                  4.8
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Average Rating
                </div>
              </div> */}
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                {/* Main Card */}
                <div
                  className={`relative bg-gradient-to-br ${exp.bgGradient} backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border dark:border-white/20 overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                      <div className="flex items-start gap-6 mb-6 lg:mb-0">
                        {/* Company Logo */}
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${exp.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                        >
                          {exp.companyLogo}
                        </div>

                        {/* Title & Company */}
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold dark:text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-3 mb-3">
                            <Building className="w-5 h-5 dark:text-gray-600" />
                            <span className="text-xl font-semibold dark:text-gray-700">
                              {exp.companyName}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm dark:text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {`${exp.starting} - ${exp.ending}`}
                            </div>
                            <div
                              className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} text-white rounded-full font-medium`}
                            >
                              {exp.type}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stats Panel */}
                      {/* <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg min-w-[280px]">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {`${exp.starting} - ${exp.ending}`}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Duration
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {exp.projects.split(" ")[0]}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Projects
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {exp.teamSize.split(" ")[0]}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Team Size
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                {exp.rating}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Rating
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    {/* Description */}
                    <p className="text-lg dark:text-gray-700 mb-8 leading-relaxed">
                      {exp.roleDescription}
                    </p>

                    {/* Achievements Grid */}
                    {/* <div className="mb-8">
                      <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Key Achievements
                        </h4>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        {exp.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="group/achievement bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white group-hover/achievement:scale-110 transition-transform duration-200`}
                              >
                                {achievement.icon}
                              </div>
                              <div
                                className={`text-2xl font-bold ${achievement.color}`}
                              >
                                {achievement.metric}
                              </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                              {achievement.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div> */}
                    {/* Responsibilities */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold dark:text-gray-900 mb-6 flex items-center gap-3">
                        <Target className="w-6 h-6 text-purple-600" />
                        Key Responsibilities
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-700">
                              {responsibility}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-lg font-bold dark:text-gray-900 mb-4">
                        Technologies & Tools
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {exp.skillsUsed.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2  dark:bg-white/80 backdrop-blur-sm dark:text-gray-700 font-medium rounded-xl border dark:border-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    {/* <div className="flex justify-end">
                      <button
                        className={`group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${exp.gradient} text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                      >
                        View Details
                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div> */}
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < experiences.length - 1 && (
                  <div className="flex justify-center py-8">
                    <div className="w-1 h-16 bg-gradient-to-b dark:from-gray-300 dark:to-gray-400 rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
