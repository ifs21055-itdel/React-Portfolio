import React from "react";
import CV_Resume from "./CV_Resume.pdf";
import Magang from "../../assets/magang.jpg";

export default function Skills() {
  return (
    <div>
      <main id="skills" className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"
          >
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-3xl">
              Front-end Developer
            </h1>
            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 md:text-blue-900">
              Skills
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"
          >
            <img
              src={Magang}
              alt=""
              className="w-full h-72 object-cover rounded-lg sm:h-64 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
          </div>
          <div className="mt-4 md:col-start-1 md:row-start-3 self-center lg:mt-2 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            <a href={CV_Resume} download>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                type="button"
                className="text-white bg-blue-950 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center"
              >
                Download CV
              </button>
            </a>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 text-blue-950 lg:col-span-1"
          >
            I focus my skills as a Front-end Developer, where I specialize in
            designing and implementing detailed user interfaces for software
            applications with an emphasis on UI/UX, functionality, performance,
            and seamless integration. I also include proof of my internship
            experience as a Front-End Developer at Permana Solution,
            demonstrating that my skills in Front-End Development are
            well-tested and reliable.
          </p>
        </div>
      </main>
    </div>
  );
}