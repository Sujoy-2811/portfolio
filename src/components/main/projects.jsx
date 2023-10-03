import Tabs from "../utils/tabs";
import Card from "../utils/card";
export default function Projects() {
  return (
    <div className={`flex justify-center flex-col items-center  p-4 rounded-3xl m-auto bg-[#00ffff] `}>
      <h2 className="text-2xl mb-3 text-blue-700 font-bold ">Projects</h2>
      <p className=" text-black w-[65%] mb-4 text-center">
      use to variety of tactics customers need to identify including reports. I am friendly and always ready to give cool service to my customers. My strength is self-motivation, hard work, and quick learning. My weakness is struggling with time management My weakness is I can not say no when ask the help.
      </p>
      <Tabs />
      <div className="grid grid-cols-3 gap-5 w-[90%]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
