import InputField from "./inputField";

export default function Form({ className }) {
  return (
    <form className={`w-[40%] text-white  ${className}`}>
      <InputField type={"text"} id={"fName"} hint={"First Name"} />
      <InputField type={"text"} id={"lName"} hint={"Last Name"} />
      <InputField type={"tel"} id={"lName"} hint={"Phone No."} />
      <InputField type={"text"} id={"email"} hint={"Email Address"} />
      <textarea
        name="Text1"
        cols="74"
        rows="8"
        style={{
          resize: "none ",
          borderRadius: "7px",
          margin: "5px",
          width: "362px",
          height: "200px",
          background: "transparent",
          border: "2px solid #3a4be4",
          outline: "none",
          padding: "0 10px",
          fontSize: "20px",
          color: "white",
        }}
        placeholder="Message"
      ></textarea>
      <InputField type={"submit"} id={"submit"} value={"Submit"} />
      {/* <textarea name="message" id="message" cols="30" rows="10"></textarea> */}
    </form>
  );
}
