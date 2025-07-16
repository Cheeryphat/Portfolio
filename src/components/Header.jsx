import React from "react";
import styles from "./css/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.name}>
          <Link to="/">Jinadu Jadesola</Link>
        </h1>
        <nav className={styles.nav}>
          {/* <a href="#about">About</a>
                    <a href="#projects"> Projects</a>
                    <a href="#contact">Contact</a> */}
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
