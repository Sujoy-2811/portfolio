import React from "react";
import work from "../../assets/work.png";

const Project = ({ title, image }) => {
  return (
    <li>
      <a
        href="https://github.com/Sujoy-2811"
        className=" m-auto  flex flex-col space-y-2 border-solid border-white border-2 w-full sm:w-auto text-center py-2   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image || work} alt={title} />
        <p>{title}</p>
      </a>
    </li>
  );
};

export default Project;
//
