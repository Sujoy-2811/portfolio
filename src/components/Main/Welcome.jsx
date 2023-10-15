import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

import work from "../../assets/work.png";
const About = () => {
  return (
    // . container
    <section className=" flex flex-col items-center mt-8 mb-16 mx-6 sm:mt-10 sm:mb-36 sm:flex-row  sm:justify-around">
      {/*  . part 1 */}
      <div className=" mb-4 sm:order-2 sm:w-[45%]">
        <img className=" md-8 w-screen" src={work} alt="my Image" />
      </div>
      {/* part 2 */}
      <div className=" flex flex-col justify-center items-start my-3  sm:order-1 sm:w-[40%] ">
        <h2 className="text-2xl font-semibold mb-1 sm:text-3xl sm:mb-3">
          Hi , i am Sujoy
        </h2>
        <h1 className=" text-3xl font-bold mb-3 sm:text-5xl sm:mb-5">
          Full Stack Developer
        </h1>
        <p className=" text-xl sm:text-2xl sm:mb-4 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor
          quibusdam alias quae cupiditate vero sequi nobis! Dolorum voluptatum,
          eos ipsam, ipsum aut voluptate
        </p>
        {/* part 3 */}
        <div className="flex space-x-2 items-center">
          <div className="rounded- text-xl my-3  px-1  bg-black text-white rounded-sm cursor-pointer sm:text-3xl sm:p-2">
            Resume
          </div>
          <BiLogoGithub className=" text-3xl cursor-pointer sm:text-5xl" />
          <BiLogoLinkedinSquare className=" text-3xl cursor-pointer sm:text-5xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
