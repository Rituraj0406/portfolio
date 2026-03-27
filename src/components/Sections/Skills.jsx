import { SKILLS } from "../../data/index";
import styles from './Skills.module.css';
import FadeIn from "../common/FadeIn";

export default function Skills() {
    return (
        <section id="skills" style={{background: "#fafaf8"}}>
            <div className={styles.section}>
                <FadeIn>
                    <div className={styles.sectionLabel}>
                        What I work with
                    </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className={styles.sectionTitle}>
                        Skills
                    </div>
                </FadeIn>
                <div className={styles.grid}>
                    {Object.entries(SKILLS).map(([cat, items], i) => (
                        <FadeIn key={cat} delay={i * 0.08}>
                            <div className={styles.card}>
                                <div  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b7355", marginBottom: "1rem", textAlign: "justify" }}>{cat}</div>
                                <div key={cat} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                    {items.map((s) => (
                                        <span key={s} className={styles.skill}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

        </section>
    );
}