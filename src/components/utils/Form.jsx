import React from "react";

const Form = () => {
  return (
    <form className="w-full max-w-lg">
      {/* Name */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-skin-fill text-skin-base border border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-skin-button-accent-hover"
            id="grid-first-name"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input
            className="appearance-none block w-full bg-skin-fill text-skin-base border border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-skin-button-accent-hover"
            id="grid-last-name"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>

      {/* email number */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-skin-fill text-skin-base border border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-skin-button-accent-hover"
            id="grid-first-name"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input
            className="appearance-none block w-full bg-skin-fill text-skin-base border border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-skin-button-accent-hover"
            id="grid-last-name"
            type="text"
            placeholder="Email Subject"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <textarea
            id="message"
            rows="4"
            className="appearance-none block w-full bg-skin-fill text-skin-base border border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-skin-button-accent-hover"
            placeholder="Leave a Message..."
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center items-center -mx-3 mb-6">
        <button
          type="submit"
          className="p-2 rounded-lg text-xl my-1 bg-skin-button-accent text-skin-inverted rounded-sm  sm:text-3xl sm:p-2 hover:bg-skin-button-accent-hover"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
