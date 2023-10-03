import styles from "./progress_bar.module.css";

export default function Progress_bar(props) {
  return (
    <div className=" flex jus  items-center flex-col ">
      <div
        className={` flex justify-center items-center text-black mb-3 w-[150px] h-[150px] rounded-[50%] bg-[radial-gradient(closest-side, white 65%, transparent 66%)]`}
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      <span className={styles["skill-name"]}>{props.name}</span>
    </div>
  );
}
