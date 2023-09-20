import styles from "./contact.module.css";
import work from "../../assets/work.png";
import Form from "../utils/form";

export default function Contact() {
  return (
    <div className={styles.container}>
      <img className={styles["work-img"]} src={work} alt="" />
      <Form className={styles["contact-form"]} />
    </div>
  );
}
