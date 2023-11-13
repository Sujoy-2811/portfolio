import React from "react";
import work from "../../assets/work.png";

const Project = ({ title, image }) => {
  return (
    <li className="w-[80%]">
      <a
        href="https://github.com/Sujoy-2811"
        className="w-full m-auto  flex flex-col space-y-2 border-solid border-gray-300 border-2 sm:w-auto text-center py-2   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image || work} alt={title} className="" />
        <p className="text-xl">{title}</p>
      </a>
    </li>
  );
};

export default Project;
//
