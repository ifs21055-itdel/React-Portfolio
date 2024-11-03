import React from "react";
import project1 from "../../assets/1.png";
import project2 from "../../assets/2.jpg";
import project3 from "../../assets/3.jpeg";

const ProjectCard = ({ image, title, link, linkLabel }) => (
  <div className="p-4 md:w-1/3 mb-6">
    <div className="rounded-lg h-52 overflow-hidden flex justify-center items-center bg-gray-800">
      <img src={image} alt="content" className="object-contain h-full w-full" />
    </div>
    <h2 className="text-xl font-medium title-font text-white mt-5">{title}</h2>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-300 hover:text-blue-100 inline-flex items-center mt-3"
    >
      {linkLabel}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "Semat Del",
      image: project1,
      link: "https://github.com/gabrielhtg/project-spmb-pabwe.git",
      linkLabel: "GitHub",
    },
    {
      title: "Re-Design IT Del Web Homepage",
      image: project2,
      link: "https://www.figma.com/proto/FscdNWErPN1vdz4qaHxhge/Tugas-IMK_11S21055?node-id=1-3&t=Hks0Q9fsCtyi72UA-1",
      linkLabel: "Figma",
    },
    {
      title: "MyAzik",
      image: project3,
      link: "https://github.com/ifs21055-itdel/MyAzik.git",
      linkLabel: "GitHub",
    },
  ];

  return (
    <section id="projects" className="text-gray-400 bg-blue-950 body-font">
      <div className="container px-3 py-11 mx-auto">
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col">
          <div className="py-4 mb-6">
            <h1 className="text-white font-medium title-font text-3xl mb-2">
              My Projects
            </h1>
            <p className="text-gray-300 leading-relaxed text-base">
              In this section, you'll find a showcase of projects that I’ve
              developed, each one reflecting a unique aspect of my frontend
              development skills and my dedication to creating user-friendly,
              visually appealing, and responsive applications. These projects
              demonstrate not only my technical proficiency in modern frontend
              technologies but also my approach to solving real-world problems
              with clean, maintainable code.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
