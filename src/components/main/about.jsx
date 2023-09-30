import work from "../../assets/work.png";
export default function About() {
  return (
    <div className={`flex  justify-between items-center mb-5 w-[100%] `}>
      <img className=" w-[45%]" src={work} alt="" />
      <p className="font-bold w-[45%] p-4 text-2lg">
        <span className="block text-4xl mb-3  ">About Me</span>
        use to variety of tactics customers need to identify including reports. I am friendly and always ready to give cool service to my customers.
My strength is self-motivation, hard work, and quick learning.
My weakness is struggling with time management
My weakness is I can not say no when ask the help.
      </p>
    </div>
  );
}
