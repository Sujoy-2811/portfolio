import ProgressBar from "../utils/progress_bar";

export default function Skills() {
  return (
    <div className={`flex flex-col gap-3 justify-center items-center p-3 m-auto mb-9 bg-[rgb(5,7,41)] rounded-3xl`}>
      <h2>Skiils</h2>
      <p className="text-center w-[80%] mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        laborum aut totam sint mollitia accusamus cumque aliquam voluptatum,
        modi magnam.
      </p>
      <div className="flex justify-evenly flex-wrap gap-5 max-w-[80%] ">
        <ProgressBar name={"nameGiven"} />
        <ProgressBar name={"nameGiven"} />
        <ProgressBar name={"nameGiven"} />
        <ProgressBar name={"nameGiven"} />
        <ProgressBar name={"nameGiven"} />
      </div>
    </div>
  );
}
