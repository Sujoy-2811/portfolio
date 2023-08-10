import styles from "./main.module.css";
import work from "../../assets/work.png";
export default function Main() {
  return (
    <div className={styles.container}>
      <div className="intro">
        <p className={styles.hello}>Hello</p>
        <h2 className={styles.name}>{`I'm Sujoy`}</h2>
        <p className={styles.work}>
          Web <span>Developer</span>
        </p>
      </div>
      <img src={work} className={styles["intro-image"]} />
    </div>
  );
}
