"use client";

import DataContext from "@/contexts/DataContext";
import { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { data } = useContext(DataContext);

  const { frontendSkills, backendSkills, softSkills } = data.skills;

  const skills = [...frontendSkills, ...backendSkills, ...softSkills];
  return (
    <section
      id="about"
      className="section-padding bg-white text-black"
      ref={ref}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate software developer with 5+ years of experience building
            scalable web applications and solving complex problems through
            innovative technology solutions.
          </p> */}
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in tech started with a simple curiosity about how
              websites worked, and over time that curiosity turned into a
              career. With more than 2.5 years of experience in frontend
              development, I’ve worked on building smooth, interactive, and
              modern web applications using HTML, CSS, JavaScript, React,
              Next.js, and Node.js.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              What drives me is the mix of creativity and problem-solving that
              comes with development. I enjoy taking an idea, breaking it down,
              and turning it into something real that people can actually use
              and enjoy.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Outside of work, I like experimenting with ideas, exploring new
              technologies, and building side projects that keep me curious.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg text-center font-medium"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
