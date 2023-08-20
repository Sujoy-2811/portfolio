import styles from "./contact.module.css";
import work from "../../assets/work.png";

export default function Contact() {
  return (
    <div className={styles.container}>
      <img className={styles["work-img"]} src={work} alt="" />
      <div className={styles.Contact}>contact</div>
    </div>
  );
}
