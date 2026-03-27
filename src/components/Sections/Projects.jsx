import { PROJECTS } from "../../data/index";
import ProjectCard from "../common/ProjectCard";
import styles from './Projects.module.css';
import FadeIn from '../common/FadeIn';

export default function Projects() {
    return (
        <section id="projects" style={{background: "#fafaf8"}}>
            <div className={styles.section}>
                <FadeIn>
                    <div className={styles.sectionLabel}>
                        Things I've built
                    </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className={styles.sectionTitle}>Projects</div>
                </FadeIn>
                <div className={`project-grid ${styles.grid}`}>
                    {PROJECTS.map((p, i) => (
                        <FadeIn key={i} delay={i * 0.1} style={{height: "1000%"}}>
                            <ProjectCard key={i} project={p} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}