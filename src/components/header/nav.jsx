import styles from "./nav.module.css";

export default function Nav() {
  return (
    <ul className={styles.container}>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Work</li>
      <li>Contact</li>
    </ul>
  );
}
