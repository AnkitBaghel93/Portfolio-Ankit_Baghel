import React, { useState , useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Posture Analysis",
    image: "/images/posture.png",
    live: "https://postureanalysis-frontend.onrender.com",
    repo: "https://github.com/AnkitBaghel93/posture-analysis",
    description:
      "AI-powered posture monitoring system that uses webcam input to detect human posture in real-time. Built with FastAPI and MediaPipe, the backend processes image frames using OpenCV, applies pose estimation, and returns posture feedback to the React frontend.",
    stack:
      "React, Tailwind CSS, FastAPI, MediaPipe, OpenCV, MongoDB, Pydantic, Python-Jose, Passlib, Uvicorn",
  },
  {
    title: "ClaimBoard Game",
    image: "/images/claimboard.png",
    live: "https://claimboard-game-frontend.onrender.com",
    repo: "https://github.com/AnkitBaghel93/claimboard-game",
    description:
      "A real-time multiplayer board game where users compete to claim cells and earn points. Uses Socket.io for bi-directional communication between players, ensuring smooth live updates. Features secure Google authentication with Passport.js and visual feedback on cell capture.",
    stack:
      "React, Socket.io, Node.js, Express, MongoDB, Passport.js (Google OAuth), Nodemailer",
  },
  {
    title: "TaskDistributor",
    image: "/images/taskdistributor.png",
    live: "https://taskdistributor-frontend.onrender.com",
    repo: "https://github.com/AnkitBaghel93/taskdistributor",
    description:
      "A CSV-driven task distribution platform that auto-assigns tasks to agents. Admins upload task sheets, and the dashboard displays agents with their assigned workloads. Built for efficient, automated team management.",
    stack:
      "React, Tailwind CSS, PapaParse, React Toastify, Node.js, Express, MongoDB",
  },
  {
    title: "Ticket Booking",
    image: "/images/ticketbooking.png",
    live: "https://ticketbooking-frontend.onrender.com",
    repo: "https://github.com/AnkitBaghel93/ticketbooking",
    description:
      "Role-based ticket booking system with real-time seat availability and booking confirmation. Supports admin and user dashboards, Google/Facebook login, and automated email confirmations.",
    stack:
      "React, Node.js, Express, MongoDB, Mongoose, Passport.js, Nodemailer, Multer",
  },
  {
    title: "BlogVista",
    image: "/images/blogvista.png",
    live: "https://blogvista-frontend.onrender.com",
    repo: "https://github.com/AnkitBaghel93/blogvista",
    description:
      "A full-featured blog platform where users can create, edit, and delete posts using a rich text editor. Includes authentication, image upload, and dynamic rendering with live preview. Built with a secure Express/MongoDB backend and modern React UI.",
    stack:
      "React, React-Quill, Node.js, Express, MongoDB, Mongoose, Multer, JWT, Bcrypt, Axios",
  },
  {
    title: "To‑Do List",
    image: "/images/todolist.png",
    live: "https://todo-list-ankit.vercel.app/",
    repo: "https://github.com/AnkitBaghel93/todo-list",
    description:
      "A simple and intuitive to-do list app where users can add, edit, and delete tasks. Data persists using LocalStorage, with filtering options and a responsive UI for seamless task management.",
    stack:
      "React, Node.js, Express, MongoDB, JWT, Bcrypt, Tailwind CSS, LocalStorage",
  },
];

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="projects"
      className="relative w-full py-24 px-6 bg-gradient-to-br from-black via-indigo-950 to-purple-950 text-white overflow-hidden"
    >
      <div className="absolute -z-10 w-[80vw] h-[80vw] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse top-1/3 left-1/2 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl flex flex-col"
            >
              <div
                className={`relative perspective h-48 ${isMobile ? "cursor-pointer" : "group"}`}
                onClick={() => isMobile && setFlippedIndex(i === flippedIndex ? null : i)}
              >
                <motion.div
                  animate={{ rotateY: isMobile ? (flippedIndex === i ? 180 : 0) : 0 }}
                  whileHover={!isMobile ? { rotateY: 180 } : {}}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-full transform-style-preserve-3d"
                >
                  <div className="absolute w-full h-full backface-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-gray-800 text-white p-4 text-sm rounded-t-xl overflow-y-auto">
                    <p className="text-gray-300">{p.description}</p>
                    <p className="text-xs text-gray-400 mt-2">🔧 {p.stack}</p>
                  </div>
                </motion.div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4">{p.title}</h3>
                <div className="mt-auto flex gap-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition text-white py-2 rounded-full font-semibold shadow-lg"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 border border-white hover:bg-white hover:text-black transition py-2 rounded-full font-semibold shadow-lg"
                  >
                    <FiGithub size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
