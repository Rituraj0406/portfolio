import styles from "./Contact.module.css";
import FadeIn from "../common/FadeIn";
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <FadeIn>
                    <div className={styles.label}>Let's talk</div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className={styles.title}>
                        Open to new<br />opportunities.
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className={styles.desc}>
                        Whether it's a full-time role, freelance project, or just a conversation — I'd love to hear from you.
                    </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <div className={styles.actions}>
                        <a
                            href="mailto:riturajof@gmail.com"
                            className={`contact-email ${styles.email}`}
                        >
                            riturajof@gmail.com
                        </a>
                        <a
                            href="https://linkedin.com/in/rajrituraj"
                            target="_blank"
                            rel="noreferrer"
                            className={`contact-btn ${styles.btn} ${styles.btnPrimary}`}
                        >
                            LinkedIn ↗
                        </a>
                        <Link
                            to="/projects"
                            className={`contact-btn ${styles.btn} ${styles.btnPrimary}`}
                        >
                            Projects ↗
                        </Link>
                    </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <div className={styles.footer}>
                        © 2025 Ritu Raj · Bangalore, India
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}