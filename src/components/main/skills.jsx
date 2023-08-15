import styles from "./skills.module.css";
import ProgressBar from "../utils/progress_bar";

export default function Skills() {
  return (
    <div className={styles.container}>
      <h2>Skiils</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        laborum aut totam sint mollitia accusamus cumque aliquam voluptatum,
        modi magnam.
      </p>
      <div className={styles["progess-bar"]}>
        <ProgressBar name={"nameGiven"} />
        <ProgressBar name={"nameGiven"} />
        <ProgressBar name={"nameGiven"} />
        <ProgressBar name={"nameGiven"} />
        <ProgressBar name={"nameGiven"} />
      </div>
    </div>
  );
}
