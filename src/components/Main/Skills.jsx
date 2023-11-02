import React from "react";
import Skill from "./../utils/Skill";
import { skills as skillList } from "./../../constants/index";
const Skills = () => {
  return (
    <section id="skills" className=" flex flex-col  mt-8 mb-16 mx-6">
      <h2 className="text-2xl font-semibold mb-1 sm:text-3xl sm:mb-3">
        Skills
      </h2>
      <div className="flex flex-col justify-center items-center flex-wrap sm:flex-row sm:justify-start ">
        {skillList.map((item) => (
          <Skill key={item.name} value={item.value} skill={item.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
