"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { useContext } from "react";
import DataContext from "@/contexts/DataContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"; // Uncomment For using 1st Return Statement
import Link from "next/link";

export default function Education() {
  const { data } = useContext(DataContext);
  const education = data.education;
  const certifications = data.certification;

  // const certifications = [
  //   {
  //     name: "AWS Certified Solutions Architect",
  //     issuer: "Amazon Web Services",
  //     date: "2023",
  //     icon: Award,
  //   },
  //   {
  //     name: "Google Cloud Professional Developer",
  //     issuer: "Google Cloud",
  //     date: "2022",
  //     icon: Award,
  //   },
  //   {
  //     name: "MongoDB Certified Developer",
  //     issuer: "MongoDB",
  //     date: "2021",
  //     icon: Award,
  //   },
  // ];

  // return (
  //   <section id="education" className="py-20 bg-white">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <motion.div
  //         initial={{ opacity: 0, y: 50 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         transition={{ duration: 0.8 }}
  //         className="text-center mb-16"
  //       >
  //         <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  //           Education & Certifications
  //         </h2>
  //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //           My academic background and professional certifications that fuel my
  //           passion for technologies.
  //         </p>
  //       </motion.div>

  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
  //         {education.map((edu, index) => (
  //           <motion.div
  //             key={index}
  //             initial={{ opacity: 0, y: 50 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             viewport={{ once: true }}
  //             transition={{ duration: 0.6, delay: index * 0.2 }}
  //           >
  //             <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
  //               <CardHeader>
  //                 <div className="flex items-center justify-between mb-4">
  //                   <motion.div
  //                     className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg"
  //                     whileHover={{ scale: 1.1, rotate: 5 }}
  //                   >
  //                     <GraduationCap className="w-6 h-6 text-blue-600" />
  //                   </motion.div>
  //                   <Badge
  //                     variant="outline"
  //                     className="text-blue-600 border-blue-200"
  //                   >
  //                     GPA: {edu.gpa}
  //                   </Badge>
  //                 </div>
  //                 <CardTitle className="text-xl font-bold text-gray-800 mb-2">
  //                   {edu.degree}
  //                 </CardTitle>
  //                 <CardDescription className="text-gray-600">
  //                   <div className="font-medium">{edu.university}</div>
  //                   <div className="text-sm">
  //                     {`${edu.starting} - ${edu.ending}`} • {edu.location}
  //                   </div>
  //                 </CardDescription>
  //               </CardHeader>
  //               <CardContent>
  //                 <p className="text-gray-600 mb-4 leading-relaxed">
  //                   {edu.description}
  //                 </p>
  //                 <div>
  //                   <h4 className="font-medium mb-2 text-gray-800">
  //                     Key Courses:
  //                   </h4>
  //                   <div className="flex flex-wrap gap-2">
  //                     {edu.courses.map((course) => (
  //                       <motion.div key={course} whileHover={{ scale: 1.05 }}>
  //                         <Badge
  //                           variant="secondary"
  //                           className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700"
  //                         >
  //                           {course}
  //                         </Badge>
  //                       </motion.div>
  //                     ))}
  //                   </div>
  //                 </div>
  //               </CardContent>
  //             </Card>
  //           </motion.div>
  //         ))}
  //       </div>

  //       <motion.div
  //         initial={{ opacity: 0, y: 50 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         transition={{ duration: 0.8 }}
  //       >
  //         <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
  //           Professional Certifications
  //         </h3>
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //           {certifications.map((cert, index) => (
  //             <motion.a
  //               key={index}
  //               href={cert.link}
  //               initial={{ opacity: 0, y: 30 }}
  //               whileInView={{ opacity: 1, y: 0 }}
  //               viewport={{ once: true }}
  //               transition={{ duration: 0.6, delay: index * 0.1 }}
  //             >
  //               <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
  //                 <CardContent className="p-6">
  //                   <motion.div
  //                     className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-4"
  //                     whileHover={{ scale: 1.1, rotate: 5 }}
  //                   >
  //                     <Award className="w-6 h-6 text-orange-600" />
  //                   </motion.div>
  //                   <h4 className="font-semibold text-gray-800 mb-2">
  //                     {cert.name}
  //                   </h4>
  //                   <p className="text-sm text-gray-600 mb-2">
  //                     {cert.provider}
  //                   </p>
  //                   <Badge
  //                     variant="outline"
  //                     className="text-orange-600 border-orange-200"
  //                   >
  //                     {cert.date}
  //                   </Badge>
  //                 </CardContent>
  //               </Card>
  //             </motion.a>
  //           ))}
  //         </div>
  //       </motion.div>
  //     </div>
  //   </section>
  // );

  return (
    <section id="education" className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Education & <span className="text-blue-600">Certifications</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-8">
                  <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
              </motion.div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 mt-10 transition-all duration-300">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {`${edu.starting} - ${edu.ending}`}
                      </div>

                      <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                      <p className="text-blue-500 font-semibold mb-1">
                        {edu.university}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-700 mb-1">
                        GPA: {edu.gpa}
                      </p>

                      <p className="text-gray-600 dark:text-gray-700 mb-4">
                        {edu.description}
                      </p>

                      <div>
                        <h5 className="font-semibold text-sm mb-2">
                          Key Coursework:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-600  text-xs rounded-full"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-8">
                  <Award className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold">Certifications</h3>
                </div>
              </motion.div>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <Link
                      href={cert.link} // <-- your redirect URL
                      target="_blank" // optional: opens in new tab
                      className="block" // ensures link behaves like a block
                    >
                      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 mt-10 transition-all duration-300">
                        <div className="flex items-start">
                          <div className="text-3xl mr-4">{cert.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-0.5">
                              {cert.name}
                            </h4>
                            <p className="text-blue-500 font-semibold mb-1">
                              {cert.provider}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-900">
                              Earned: {cert.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
