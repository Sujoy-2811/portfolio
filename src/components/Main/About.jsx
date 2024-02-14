import work from "../../assets/work.png";

const About = () => {
  return (
    // . container
    <section
      id="about"
      className=" flex flex-col items-center mt-1 mx-6 sm:flex-row  sm:justify-around"
    >
      {/*  . part 1 */}
      <div className=" order-2 mb-4 sm:order-2 sm:w-[45%]">
        <img className=" md-8 w-screen" src="about.svg" alt="my Image" />
      </div>
      {/* part 2 */}
      <div className=" mt-6 flex flex-col justify-center items-start my-3  sm:order-2 sm:w-[40%] ">
        <h2 className="text-center w-full text-2xl font-semibold mb-1 sm:text-3xl sm:mb-3 sm:text-start">
          About Me
        </h2>
        <p className="text-skin-muted text-xl  sm:text-2xl sm:mb-4 flex flex-col space-y-3">
          <span>
            A full-stack developer. I love creating beautiful things on the
            internet that are Clean and Minimal.
          </span>
          <span>
            Problem solver and curiosity-driven, I have to know the why of
            everything. I'm happiest when I'm learning, building, and
            contributing. When I'm away from my screen, you'll find me reading
            or gaming. Let's build cool things!
          </span>
          <span>Let's build cool things!</span>
        </p>
      </div>
    </section>
  );
};

export default About;
