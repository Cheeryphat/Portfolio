import React from 'react'
import styles from "./css/about.module.css";
import laptopImage from "../assets/laptop.png";
const About = () => {


    return (
        <section className={styles.about} id="about">
            <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                    <h2>About Me </h2>
                    <p>
                        I am a passionate software developer with a keen interest in building innovative solutions. My journey in tech has been driven by a love for problem-solving and a desire to create impactful applications.
                    </p>
                </div>
                <div className={styles.aboutImage}>
                    <img src={laptopImage} alt="Laptop" className={styles.laptopImage} />
                </div>

            </div>
        </section>
    )
}
export default About;