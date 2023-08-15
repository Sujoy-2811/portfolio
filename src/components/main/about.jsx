import styles from "./about.module.css";
import work from "../../assets/work.png";
export default function About() {
  return (
    <div className={styles.container}>
      <img className={styles["work-img"]} src={work} alt="" />
      <p className={styles.about}>
        <span className={styles.title}>About me</span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
        corrupti sit? Consequuntur animi nam necessitatibus fugit sit beatae
        eligendi reprehenderit aut, facere explicabo quae libero fugiat saepe
        laborum culpa corrupti cumque architecto nesciunt dolorum ratione ipsam
        officia fuga. Totam repellat natus cumque debitis placeat nulla?
      </p>
    </div>
  );
}
