import styles from "../page.module.scss";
import { NavLinkProps } from "../_types/layout";

export default function NavLinks({ links, isMobile }: NavLinkProps) {
  const isMobileLink = isMobile ? styles["link-list-item--mobile"] : null;
  const allLinks = links.map((link, index) => {
    return (
      <li key={index} className={`${styles["link-list-item"]} ${isMobileLink}`}>
        {link}
      </li>
    );
  });

  return <ul className={styles["nav-links"]}>{allLinks}</ul>;
}
