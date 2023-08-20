import About from "./about";
import Skills from "./skills";
import Projects from "./Projects";
import Contact from "./contact";
import styles from "./main.module.css";
import work from "../../assets/work.png";
export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles["intro-container"]}>
        <div className="intro">
          <p className={styles.hello}>Hello</p>
          <h2 className={styles.name}>{`I'm Sujoy Manna`}</h2>
          <p className={styles.work}>
            Web <span>Developer</span>
          </p>
        </div>
        <img src={work} className={styles["intro-image"]} />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
