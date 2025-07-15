import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
];

const Skills = () => {
  return (
    <div className="relative w-full py-24 px-6 bg-gradient-to-br from-black via-indigo-950 to-purple-950 text-white overflow-hidden">
      
      {/* Background animated blob */}
      <div className="absolute -z-10 w-[80vw] h-[80vw] bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse top-0 left-1/2 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500 ">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
