import React from "react";
import { projects as projectList } from "./../../constants/index";

import Project from "./../utils/Project";

const Projects = () => {
  console.log(projectList);
  return (
    <section id="projects" className=" text-center mt-8  mx-6 sm:mt-28  pb-7">
      <h2 className="text-2xl font-semibold mb-10 sm:text-3xl ">Projects</h2>
      <ul className=" flex flex-col gap-y-7 justify-center items-center sm:mx-12 list-none sm:grid  sm:grid-cols-3 sm:gap-20   ">
        {projectList.map((item) => (
          <Project key={item.title} title={item.title} image={item.image} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
