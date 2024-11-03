import React from "react";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import me from "../../assets/me.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center">
      <div className="md:h-[990px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute bg-blue-950 rounded-full transform rotate-6 -top-40 z-0"></div>
      <Navbar />

      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt-32 pt-24 md:pb-24 mt-24 md:mt-0 z-10"
      >
        <div data-aos="fade-up" className="flex-1 md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Gerry Benyamin Abdiel Bukit
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base sm:text-lg md:text-lg text-gray-300 mb-6"
          >
            Welcome! If you would like to establish a partnership please contact
            me through the information below or let's get to know each other,
            you can contact me through some of my social media below. Thanks!
          </p>

          <div className="flex space-x-4 mb-4">
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
          <a
            href="#contact"
            className="text-gray-900 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center"
          >
            Contact
          </a>
        </div>

        <div
          data-aos="fade-up"
          className="flex-1 flex justify-center md:justify-end mt-0 md:mt-0"
        >
          <img
            src={me}
            alt="Hero Image"
            className="h-[300px] sm:h-[400px] md:h-[440px] w-[250px] sm:w-[360px] object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
