import styles from "./inputField.module.css";

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
        className={styles.input}
        type={type}
        id={id}
        placeholder={hint}
      />
      {/* <label htmlFor={id} className={styles.label}></label> */}
    </>
  );
}
