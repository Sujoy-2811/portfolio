const Project = ({ props: { title, image, demoLink, githubLink } }) => {
  console.log(title, image, demoLink, githubLink);
  console.log(`../../assets/${image}`);
  return (
    <li className="border border-solid border-gray-300  w-[20rem] h-[17rem]  pb-2 rounded-md ">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <div className="w-full  m-auto  flex flex-col  space-y-2  sm:w-auto text-center    ">
          {/* ! img */}
          <img
            src={image}
            // src={image ? `../../assets/${image}` : work}
            alt={title}
            className=" object-cover rounded-t-md"
          />
          <p className="text-xl">{title}</p>
          <div className=" flex justify-between mx-5 font-sans font-semibold   ">
            {githubLink && (
              <a
                className="border-2 border-solid  p-1 hover:bg-skin-button-accen rounded-sm"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            )}
            {demoLink && (
              <a
                className="border-2 border-solid  p-1 hover:bg-skin-button-accent rounded-sm"
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            )}
          </div>
        </div>
      </a>
    </li>
  );
};

export default Project;
//
