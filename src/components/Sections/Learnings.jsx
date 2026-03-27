import { LEARNING } from "../../data/index";
import LearningBar from "../common/LearningBar";
import FadeIn from "../common/FadeIn";
import styles from "./Learning.module.css";

export default function Learning() {
    return (
        <section id="learning" style={{background: "#f5f3ee"}}>
            <div className={styles.section}>
                <FadeIn>
                    <div className={styles.sectionLabel}>Currently growing</div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className={styles.sectionTitle}>Learning Backend</div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className={styles.sectionSubtitle}>
                        I'm actively expanding into backend development with Node.js — building REST APIs, working with databases, and understanding the full stack. Here's where I am:
                    </p>
                </FadeIn>
                <div className={styles.barContainer}>
                    {LEARNING.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <LearningBar item={item} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}