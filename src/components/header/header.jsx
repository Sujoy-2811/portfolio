import Nav from "./nav.jsx";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <h2>Sujoy</h2>

      <Nav className={styles.nav} />
    </div>
  );
}
