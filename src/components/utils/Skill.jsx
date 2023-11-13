import React from "react";

const Skill = ({ value, skill }) => {
  return (
    <div className=" m-4 flex flex-col justify-center items-start gap-2 w-[80%]  sm:m-6 sm:w-auto ">
      <h4>{skill}</h4>
      <div className="flex gap-2 items-center w-full">
        <progress value={value} max="100" className=" w-full sm:w-64" />
        <span>{value + "%"}</span>
      </div>
    </div>
  );
};

export default Skill;
