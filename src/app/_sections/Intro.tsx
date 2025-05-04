import styles from "../page.module.scss";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.intro__img}>
          <picture>
            <source media="(min-width: 64rem)" srcSet="desktop/image-interactive.jpg" />
            <img src="mobile/image-interactive.jpg" role="presentation" />
          </picture>
        </div>

        <div className={styles.intro__content}>
          <h2 className={`${styles.heading} ${styles["heading--2"]}`}>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed
            businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}
