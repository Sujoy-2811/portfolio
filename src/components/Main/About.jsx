import work from "../../assets/work.png";

const About = () => {
  return (
    // . container
    <section className=" flex flex-col items-center mt-1 mx-6 sm:flex-row  sm:justify-around">
      {/*  . part 1 */}
      <div className=" mb-4 sm:order-2 sm:w-[45%]">
        <img className=" md-8 w-screen" src={work} alt="my Image" />
      </div>
      {/* part 2 */}
      <div className=" flex flex-col justify-center items-start my-3  sm:order-2 sm:w-[40%] ">
        <h2 className="text-2xl font-semibold mb-1 sm:text-3xl sm:mb-3">
          About Me
        </h2>
        <p className="text-skin-muted text-xl  sm:text-2xl sm:mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus modi
          rem autem illo dicta quisquam distinctio iusto ad veritatis eum labore
          eos porro cumque voluptas repellat ex alias, itaque ipsum perferendis
          placeat asperiores minima?
        </p>
      </div>
    </section>
  );
};

export default About;
