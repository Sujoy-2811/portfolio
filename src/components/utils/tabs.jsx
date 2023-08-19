import styles from "./tabs.module.css";
export default function Tabs() {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>Tab 1</div>
      <div className={styles.tab}>Tab 2</div>
      <div className={styles.tab}>Tab 3</div>
    </div>
  );
}
