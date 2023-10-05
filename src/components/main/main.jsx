import About from "./about";
import Skills from "./skills";
import Project from "./Projects";
import Contact from "./Contact" ;
import work from "../../assets/work.png";
export default function Main() {
  return (
    <div className="w-[90%] m-auto">
      <div className=" flex justify-between items-center mb-5 m-a">
        <div >
          <p className=" text-xl">Hello</p>
          <h2 className="text-[60px]">{`I'm Sujoy Manna`}</h2>
          <p className="text-[40px]">
            Web <span>Developer</span>
          </p>
        </div>
        <img src={work} className=" w-[45%]" />
      </div>
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
