
export default function InputField({
  type = "text",
  id = 0,
  hint = "enter here",
  value = "",
}) {
  return (
    <>
      <input
        onChange={(e) => console.log(e.target.value)}
        className="text-xl text-white py-0 px-3 border-solid border-[#3a4be4] border-2 bg-transparent h-12 w-41 m-1"
        type={type}
        id={id}
        placeholder={hint}
      />
      {/* <label htmlFor={id} className={styles.label}></label> */}
    </>
  );
}
