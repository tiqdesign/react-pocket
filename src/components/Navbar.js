import React, { Component } from "react";
import styles from "./navbar.module.css";
import { ReactComponent as Logo } from "../icons/svg/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className={styles.navContainer}>
        <nav className={styles.navbar}>
          <div className={styles.navbarLogo}>
            <Logo />
          </div>
          <ul className={styles.navbarList}>
            <li className={styles.navbarListItem}>
              <a className={styles.navbarListItemLink} href="#">Home</a>
            </li>
            <li className={styles.navbarListItem}>
              <a className={styles.navbarListItemLink} href="#">Discover</a>
            </li>
            <li className={styles.navbarListItem}>
              <a className={styles.navbarListItemLink} href="#">Explore</a>
            </li>
            <li className={styles.navbarListItem}>
              <a className={styles.navbarListItemLink} href="#">Profile</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
