import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full py-24  px-6 bg-gradient-to-br from-black via-indigo-950 to-purple-950 text-white overflow-hidden ">
      
      {/* Animated background blob */}
      <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500 ">
          About Me
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          I'm <strong>Ankit Baghel</strong>, a pre-final year B.Tech student in Information Technology at 
          <strong> University Institute of Technology, RGPV Bhopal</strong> (Batch: 2022–2026).
        </p>

        <p className="mt-4 text-gray-400">
          Academically, I’ve always been committed to excellence. I scored <strong>93% in 10th</strong> and <strong>88% in 12th</strong> (CBSE), which laid the foundation for my logical thinking and problem-solving skills — now further sharpened through coding and software development.
        </p>

        <p className="mt-6 text-gray-400">
          I specialize in full-stack development using the <strong>MERN stack</strong>. From building clean UIs in React and Tailwind CSS to engineering scalable backends with Node.js, Express.js, and MongoDB, I enjoy every part of the development cycle.
          Projects like <strong>TaskDistributor</strong>, <strong>DooBeeDoo</strong>, and <strong>Newsbook</strong> reflect my focus on real-world problem-solving, design thinking, and collaboration.
        </p>

        <p className="mt-6 text-gray-400">
          I'm also actively involved in <strong>freelance projects</strong> and always exploring open-source contributions to expand my technical exposure. With a good grasp of tools like Git, GitHub, Redux, and REST APIs, I'm prepared to contribute in team environments and adapt quickly.
        </p>

        <p className="mt-6 text-gray-500 italic">
          Currently seeking internship opportunities where I can apply my skills, contribute to impactful projects, and continue learning from experienced mentors in the software development industry.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
