import React from "react";
import { motion } from "framer-motion";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiGithub,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiRedux,
  SiGit,
  SiTypescript,
  SiBootstrap,
 
} from "react-icons/si";

const techIcons = [
  { icon: <SiReact />, style: "top-10 left-6 text-cyan-400" },
  { icon: <SiNodedotjs />, style: "top-32 right-10 text-green-500" },
  { icon: <SiMongodb />, style: "bottom-10 right-12 text-green-400" },
  { icon: <SiJavascript />, style: "top-[40%] left-[45%] text-yellow-300" },
  { icon: <SiGithub />, style: "bottom-16 left-8 text-white" },
  { icon: <SiExpress />, style: "bottom-[20%] right-[40%] text-gray-300" },
  { icon: <SiTailwindcss />, style: "top-12 right-[20%] text-sky-400" },
  { icon: <SiHtml5 />, style: "bottom-[30%] left-24 text-orange-500" },
  { icon: <SiCss3 />, style: "top-[55%] right-20 text-blue-500" },
  { icon: <SiPostgresql />, style: "top-[70%] left-12 text-blue-300" },
  { icon: <SiRedux />, style: "bottom-24 right-[30%] text-purple-500" },
  { icon: <SiGit />, style: "top-20 left-[30%] text-orange-600" },
  { icon: <SiTypescript />, style: "bottom-[10%] left-[50%] text-blue-500" },
  { icon: <SiBootstrap />, style: "top-[15%] right-[15%] text-indigo-400" },
  
];

const Hero = () => {
  return (
    <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[100vh] flex items-center justify-center bg-gradient-to-r from-indigo-950 via-black to-purple-950 text-white overflow-hidden ">

      {/* Floating tech icons */}
      {techIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute text-3xl sm:text-4xl md:text-5xl opacity-20 z-0 ${item.style}`}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6 + (idx % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 0.1,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-center px-4 py-8"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
          Hi, I'm Ankit Baghel
        </h1>

        <p className="mt-3 text-base sm:text-lg lg:text-xl text-gray-300 ">
          Full Stack Developer | MERN Expert | DSA Enthusiast
        </p>

        <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-400">
          I craft scalable web apps with React, Node.js, and MongoDB.
          Recently developed <strong>TaskDistributor</strong> & <strong>PostureAnalysis</strong>. Open to freelance work and passionate about delivering high-impact digital solutions.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:itankitbaghel08@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-xl shadow-xl text-white font-semibold"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/AnkitBaghel93"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition font-semibold"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
