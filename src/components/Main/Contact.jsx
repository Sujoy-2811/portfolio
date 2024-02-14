import React from "react";

import work from "../../assets/work.png";
import Form from "../utils/Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" flex flex-col items-center mt-1 mx-6 sm:flex-row  sm:justify-around sm:mt-20"
    >
      {/*  . part 1 */}
      <div className=" mb-4 sm:order-2 sm:w-[45%]">
        <img className=" md-8 w-screen" src="contact.svg" alt="my Image" />
      </div>
      {/* part 2 */}
      <div className="w-[80%] flex flex-col justify-center items-start my-3  sm:order-2 sm:w-[40%] ">
        <h2 className="text-2xl font-semibold mb-6 sm:text-3xl sm:mb-3">
          Get In Touch (Work in Progress)
        </h2>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
