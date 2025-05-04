import styles from "../page.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <h1 className={`${styles.heading} ${styles["heading--1"]}`}>Immersive experiences that deliver</h1>
      </div>
    </div>
  );
}
