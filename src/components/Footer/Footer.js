import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-sky-700 mt-5 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between w-full md:w-auto mb-4 md:mb-0">
          <a href="/" className="text-xl font-bold mb-2 md:mb-0 md:mr-4">My Portfolio</a>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-sky-300">About</a>
            <a href="#skills" className="hover:text-sky-300">Skills</a>
            <a href="#projects" className="hover:text-sky-300">Projects</a>
            <a href="#contact" className="hover:text-sky-300">Contact</a>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/NexusNeeraj" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/neeraj-gupta-b83243233/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/Neeraj21519372" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <BsTwitterX size={24} />
          </a>
          <a href="https://www.instagram.com/ne_eraj5151/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Neeraj. All rights reserved.</p>
          <p>Made with <span className="text-red-500">&hearts;</span> Designed and Developed by Neeraj.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
