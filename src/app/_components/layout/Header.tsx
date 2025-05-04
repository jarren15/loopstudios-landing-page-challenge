"use client";
import styles from "../../page.module.scss";
import { NavLinkProps } from "@/app/_types/layout";
import NavLinks from "../NavLinks";
import { useEffect, useState, useRef } from "react";

export default function Header({ links }: NavLinkProps) {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const handleMenuOpen = () => {
    setMobileMenuState(true);
  };
  const handleMenuClose = () => {
    setMobileMenuState(false);
  };

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileMenuState) mobileMenuRef.current.classList.add(styles["header__mobile-menu--open"]);
    else mobileMenuRef.current.classList.remove(styles["header__mobile-menu--open"]);
  }, [mobileMenuState]);

  return (
    <header className={styles.header}>
      <nav className={`${styles.header__nav} ${styles.container}`}>
        <div className={styles["header__logo-container"]}>
          <img src="logo.svg" role="presentation" />
          <NavLinks links={links} />
          <button className={styles.header__hamburger} onClick={handleMenuOpen}>
            <img src="icon-hamburger.svg" alt="Menu icon" />
          </button>
        </div>
      </nav>

      <div className={`${styles["header__mobile-menu"]} ${styles.container}`} ref={mobileMenuRef}>
        <div className={styles["header__logo-container"]}>
          <img src="logo.svg" role="presentation" />
          <button className={styles.header__close} onClick={handleMenuClose}>
            <img src="icon-close.svg" alt="Menu icon" />
          </button>
        </div>
        <NavLinks links={links} isMobile={true} />
      </div>
    </header>
  );
}
