import styles from "../../page.module.scss";
import { NavLinkProps } from "@/app/_types/layout";
import NavLinks from "../NavLinks";

const icons = ["facebook", "twitter", "pinterest", "instagram"];

export default function Footer({ links }: NavLinkProps) {
  const allIcons = icons.map((icon, index) => {
    return (
      <li key={index} className={styles["link-list-item"]}>
        <img src={`icon-${icon}.svg`} alt={`${icon} icon`} />
      </li>
    );
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__left}>
          <img src="logo.svg" alt="Footer logo" />
          <NavLinks links={links} />
        </div>
        <div className={styles.footer__right}>
          <ul className={styles.footer__icons}>{allIcons}</ul>
          <div className={styles.footer__copyright}>&copy; 2021 Loopstudios. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
