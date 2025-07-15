import React from 'react'

const Footer = () => (
  <footer className="bg-black text-white py-6 text-center text-sm">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-3">
      <p>© {new Date().getFullYear()} Ankit Baghel. All rights reserved.</p>
      <div className="flex gap-4 text-gray-400">
        <a href="#hero" className="hover:text-white">Home</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </div>
  </footer>
);


export default Footer
