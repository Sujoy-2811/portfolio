import styles from "./progress_bar.module.css";

export default function Progress_bar(props) {
  return (
    <div className={styles.container}>
      <div
        className={styles["progress-bar"]}
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      <span className={styles["skill-name"]}>{props.name}</span>
    </div>
  );
}
