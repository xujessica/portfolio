import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 md:px-10">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900 md:px-10 -mt-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-20 pb-30">
            <div className="col-span-2 md:col-span-2">
              {userData.projects.map((proj, idx) => (
                <ProjectCard
                  title={proj.title}
                  link={proj.link}
                  imgUrl={proj.imgUrl}
                  number={`${idx + 1}`}
                />
              ))}
            </div>
            <div className="col-span-2 pt-12">
              {userData.projects.map((proj) => (
                <ProjectDescriptionCard
                  title={proj.title}
                  description={proj.description}
                />
              ))}
            </div>
          </div>
        </div>
        {/* graphic design pieces */}
        <div className="md:px-10  max-w-6xl mx-auto">
          {" "}
          <h1 className="text-5xl md:text-9xl font-bold pt-20 text-center md:text-left py-10">
            Designs
          </h1>
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold text-center md:text-left"
            style={{ lineHeight: "3rem" }}
          >
            Art 438 Graphic Designs
          </p>
          <p className="text-l text-gray-700 mb-4 dark:text-gray-300 pt-6">
            I took Art 346 (Basic Graphic Design) my second semester of Freshman
            Year. This was my first graphic design course where I refined my
            skills in Adobe Illustrator, Photoshop, and InDesign.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-10 pb-30">
          {userData.designs.map((proj, idx) => (
            <DesignCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <div className="py-10">
      <a href={link} className="w-full block shadow-2xl">
        <div className="relative overflow-hidden">
          <div className="h-72 object-cover">
            <img
              src={imgUrl}
              alt="portfolio"
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
            {number.length === 1 ? "0" + number : number}
          </h1>
        </div>
      </a>
    </div>
  );
};

const ProjectDescriptionCard = ({ title, description }) => {
  return (
    <div className="pb-24 md:px-10">
      <p
        className="leading-loose text-2xl md:text-4xl font-semibold text-center md:text-left"
        style={{ lineHeight: "3rem" }}
      >
        {title}
      </p>
      <p className="text-l text-gray-700 mb-4 dark:text-gray-300 pt-6">
        {description}
      </p>
    </div>
  );
};

const DesignCard = ({ title, link, imgUrl, number }) => {
  return (
    <div className="py-10">
      <a href={link} className="w-full block shadow-2xl">
        <div className="relative overflow-hidden">
          <div className="h-96 object-cover">
            <img
              src={imgUrl}
              alt="portfolio"
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
            {number.length === 1 ? "0" + number : number}
          </h1>
        </div>
      </a>
    </div>
  );
};
