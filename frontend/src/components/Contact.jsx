import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-6 py-16 bg-gradient-to-br from-black via-indigo-950 to-purple-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Feel free to reach out for collaborations, freelance work, or just a friendly chat.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-lg">
          <a
            href="mailto:itankitbaghel08@gmail.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FiMail className="text-xl" /> itankitbaghel08@gmail.com
          </a>
          <a
            href="tel:+919009084090"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FiPhone className="text-xl" /> +91 9009084090
          </a>
          <a
            href="https://github.com/AnkitBaghel93"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FiGithub className="text-xl" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-baghel-359269277/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FiLinkedin className="text-xl" /> LinkedIn
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-10">
          <a
            href="/Ankit_Baghel_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            <FiDownload className="text-xl" />
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
