"use client";
import DataContext from "@/contexts/DataContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { GrTechnology } from "react-icons/gr";
import { Camera, Plane, Book, Dumbbell, Network } from "lucide-react";

export default function Interests() {
  const { data, loading } = useContext(DataContext);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  const interests = data.interest;

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
              Personal <span className="text-blue-600">Interests</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                key={index}
              >
                <div className="group bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {typeof interest.icon === "string" ? (
                      interest.icon === "Network" ? (
                        <Network className="w-8 h-8" />
                      ) : interest.icon === "Camera" ? (
                        <Camera className="w-8 h-8" />
                      ) : interest.icon === "Plane" ? (
                        <Plane className="w-8 h-8" />
                      ) : interest.icon === "Book" ? (
                        <Book className="w-8 h-8" />
                      ) : interest.icon === "Dumbbell" ? (
                        <Dumbbell className="w-8 h-8" />
                      ) : interest.icon === "GrTechnology" ? (
                        <GrTechnology className="w-8 h-8" />
                      ) : null
                    ) : null}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">
                    {interest.title}
                  </h3>
                  <p className="dark:text-gray-600">{interest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
              <p className="mb-6 opacity-90">
                I love meeting new people and discussing technology, projects,
                or shared interests. Feel free to reach out if you'd like to
                collaborate or just have a chat!
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start a Conversation
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
