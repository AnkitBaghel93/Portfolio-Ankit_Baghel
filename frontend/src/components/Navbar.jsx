import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => setIsOpen(!isOpen);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(link.name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
      className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
       
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  className="flex items-center gap-2"
>
  <img
    src="images/logo.jpg"
    alt="Logo"
    className="w-10 h-10 rounded-full object-cover"
  />
  <a href="/" className="hidden md:inline-block text-2xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow">
    Ankit Baghel
  </a>
</motion.div>


        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`transition-all duration-200 relative group ${
                  activeLink === link.name ? 'text-blue-400' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-4 text-white font-medium text-center"
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
                className={`block py-2 transition ${
                  activeLink === link.name ? 'text-blue-400' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
