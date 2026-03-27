import { useState } from "react";
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={styles.card}
        >
            {/* Slide-up dark overlay */}
            <div className={styles.overlay}/>
            {/* Content Layer */}
            <div className={styles.contentLayer}>
                <div className={styles.icon}>
                    {project.icon}
                </div>
                <div className={styles.cardContent}>
                    <span className={styles.cardTitle}>{project.name}</span>
                    <span className={styles.badge}>{project.type}</span>
                </div>
                <p className={styles.desc}>
                    {project.desc}
                </p>
                <div className={styles.cardTagsContainer}>
                    {project.tags.map((t, i) => (
                        <span key={t} className={styles.tag}>{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}