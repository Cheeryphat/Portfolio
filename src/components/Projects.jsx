import React from "react"
import styles from "./css/projects.module.css"
import project1 from "../assets/laptop.png"

const Projects = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis.",
            imageUrl: project1,
        },
        {
            title: "Calculator App",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis..",
            imageUrl: project1,
        },
        {
            title: "Task Management Tool",
            description:
                "A productivity app built Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis.",
            imageUrl: project1,
        },
        {
            title: "Lorem",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis.",
            imageUrl: project1,
        },
    ]
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.projectsContent}>
                <h2>My Projects</h2>
               
                <div className={styles.projectGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <img src={project.imageUrl} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects
