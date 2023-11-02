import React from "react";

const Skill = ({ value, skill }) => {
  return (
    <div className=" m-6 flex flex-col justify-center items-start gap-2">
      <h4>{skill}</h4>
      <div className="flex gap-2 items-center">
        <progress value={value} max="100" className=" w-64" />
        <span>{value + "%"}</span>
      </div>
    </div>
  );
};

export default Skill;
