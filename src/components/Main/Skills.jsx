// import React from "react";
// import Skill from "./../utils/Skill";
// import { skills as skillList } from "./../../constants/index";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiAppwrite } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex flex-col items-center  mx-6 sm:flex-row  sm:mt-28 sm:justify-around"
    >
      {/* part 1 */}
      <div className=" mt-6 flex flex-col justify-center items-center my-3 w-full   sm:order-2 sm:w-[40%] ">
        <h2 className="text-2xl font-semibold mb-1 sm:text-3xl sm:mb-3">
          SKills
        </h2>
        <div className="text-7xl w-full grid grid-cols-4 gap-y-2 p-2 sm:mt-4  sm:gap-4">
          <FaHtml5 className=" hover:text-[#e34c26]" />
          <FaCss3Alt className=" hover:text-[#264de4]" />
          <IoLogoJavascript className=" hover:text-[#f0db4f]" />
          <FaReact className=" hover:text-[#61DBFB]" />
          <BiLogoTailwindCss className=" hover:text-[#00b6d7]" />
          <TbBrandNextjs className=" hover:text-[#fff]" />
          <IoLogoNodejs className=" hover:text-[#6cc24a]" />
          <SiExpress className=" hover:text-[#fff]" />
          <SiAppwrite className=" hover:text-[#fd366e]" />
          <SiFirebase className=" hover:text-[#f89313]" />
        </div>
        {/* images */}
        <div className="grid"> </div>
      </div>
      {/*  . part 2 */}
      <div className=" hidden mb-4 sm:block sm:order-2 sm:w-[45%]">
        <img className=" md-8 w-screen" src="skills.svg" alt="my Image" />
      </div>
    </section>
  );
};

export default Skills;
