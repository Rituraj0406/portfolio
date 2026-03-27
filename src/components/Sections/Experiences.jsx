import { EXPERIENCE } from "../../data/index";
import styles from "./Experience.module.css";
import FadeIn from "../common/FadeIn";

export default function Experience() {
    return (
        <section id="experience" style={{background: "#f5f3ee"}}>
            <div className={styles.section}>
                <FadeIn>
                    <div className={styles.sectionLabel}>
                        Career journey
                    </div>
                </FadeIn>
                <FadeIn delay={.1}>
                    <div className={styles.sectionTitle}>
                        Experience
                    </div>
                </FadeIn>
                <div className={styles.container}>
                    {EXPERIENCE.map((exp, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className={styles.item}>
                                <div>
                                    <div className={styles.period}>{exp.period}</div>
                                    <div className={styles.location}>{exp.location}</div>
                                </div>
                                <div>
                                    <div className={styles.role}>{exp.role}</div>
                                    <div className={styles.company}>{exp.company}</div>
                                    <ul className={styles.list}>
                                        {exp.highlights.map((h, j) => (
                                            <li key={j} className={styles.listItem}>
                                                <span className={styles.listPointer}>◆</span>
                                                <span className={styles.heighLights}>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}