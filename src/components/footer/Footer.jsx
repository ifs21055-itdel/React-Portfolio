import React from "react";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-200 bg-blue-950 body-font">
        <div className="container justify-center px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-2xl font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Gerry Bukit
          </p>
          <div className="flex space-x-4 sm:ml-auto sm:mt-0 mt-4">
            <a
              href="https://instagram.com/gerrybenyamin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/ifs21055-itdel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/GerryBenyamin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/gerrybukit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
