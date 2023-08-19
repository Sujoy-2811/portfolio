import Tabs from "../utils/tabs";
import Card from "../utils/card";
import styles from "./projects.module.css";
export default function Projects() {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        quidem odit aliquid itaque minus beatae atque distinctio sit et nam
        dignissimos unde recusandae aliquam ea quis, eos nulla dicta pariatur
        necessitatibus rerum.
      </p>
      <Tabs />
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
