import work from "../../assets/work.png";
import Form from "../utils/form";

export default function Contact() {
  return (
    <div className={`flex items-center justify-between m-auto pt-9 rounded-3xl my-3`}>
      <img className="w-[45%]" src={work} alt="" />
      <Form className="w-[45%]" />
    </div>
  );
}
