import styles from "../page.module.scss";

interface Item {
  titleUp: string;
  titleDown: string;
  imgFilename: string;
}

const items: Item[] = [
  {
    titleUp: "Deep",
    titleDown: "earth",
    imgFilename: "deep-earth",
  },
  {
    titleUp: "Night",
    titleDown: "arcade",
    imgFilename: "night-arcade",
  },
  {
    titleUp: "Soccer",
    titleDown: "team VR",
    imgFilename: "soccer-team",
  },
  {
    titleUp: "The grid",
    titleDown: "grid",
    imgFilename: "grid",
  },
  {
    titleUp: "From up",
    titleDown: "above VR",
    imgFilename: "from-above",
  },
  {
    titleUp: "Pocket",
    titleDown: "borealis",
    imgFilename: "pocket-borealis",
  },
  {
    titleUp: "The",
    titleDown: "curiosity",
    imgFilename: "curiosity",
  },
  {
    titleUp: "Make it",
    titleDown: "fisheye",
    imgFilename: "fisheye",
  },
];

export default function Gallery() {
  const allItems = items.map((item, index) => {
    return (
      <div key={index} className={styles.gallery__item}>
        <picture>
          <source media="(min-width: 64rem)" srcSet={`desktop/image-${item.imgFilename}.jpg`} />
          <img src={`mobile/image-${item.imgFilename}.jpg`} alt={`${item.titleUp} ${item.titleDown} image`} />
        </picture>
        <div>
          <h3 className={`${styles.heading} ${styles["heading--3"]}`}>
            <span>{item.titleUp}</span> <span>{item.titleDown}</span>
          </h3>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={`${styles.heading} ${styles["heading--2"]}`}>our creations</h2>
        <button className={styles.button}>see all</button>
        <div className={styles.gallery__content}>{allItems}</div>
      </div>
    </div>
  );
}
