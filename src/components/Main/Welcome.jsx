import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

import work from "../../assets/work.png";
const About = () => {
  return (
    // . container
    <section className=" flex flex-col items-center my-1 mx-6 sm:flex-row  sm:justify-around">
      {/*  . part 1 */}
      <img
        className="  w-full sm:order-2 sm:w-[45%]"
        src={work}
        alt="my Image"

        //  ? fefwsefr
      />
      {/* part 2 */}
      <div className=" flex flex-col justify-center items-start my-3  sm:order-1 sm:w-[40%] ">
        <h2 className="text-xl mb-1 sm:text-3xl sm:mb-3">Hi , i am Sujoy</h2>
        <h1 className=" text-2xl font-bold mb-3 sm:text-5xl sm:mb-5">
          Full Stack Developer
        </h1>
        <p className="sm:text-2xl sm:mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor
          quibusdam alias quae cupiditate vero sequi nobis! Dolorum voluptatum,
          eos ipsam, ipsum aut voluptate
        </p>
        {/* part 3 */}
        <div className="flex space-x-2 items-center">
          <div className="  my-3  px-1  bg-black text-white rounded-sm cursor-pointer sm:text-3xl sm:p-2">
            Resume
          </div>
          <BiLogoGithub className=" text-2xl cursor-pointer sm:text-5xl" />
          <BiLogoLinkedinSquare className=" text-2xl cursor-pointer sm:text-5xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
