import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Landing.module.css";
import Button from "../hooks/customButton";


const Landing = () => {
  return (
    <section id="home" className={styles.landing}>
      <div className={styles.landingContent}>
      
      <div className={styles.glassmorphism}>
          <h1>Hi, I'm Jinadu Jadesola</h1>
          <h2>Software Developer</h2>
          <p>
            I am a passionate developer with a keen interest in creating
            innovative solutions. Explore my work and get in touch!
          </p>
          <div className={styles.cta}>
            <Link to="/home">
              <Button variant="primary" size="large">
                Learn More
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="large">
                Contact Me
              </Button>
            </Link>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
