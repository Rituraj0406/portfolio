import useInView from "../../hooks/useInView";
import styles from "./LearningBar.module.css";

export default function LearningBar({ item }) {
    const [ref, inView] = useInView();

    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.header}>
                <span className={styles.skill}>{item.skill}</span>
                <span className={styles.progressText}>
                    {item.progress}%
                </span>
            </div>
            <div className={styles.bar}>
                <div
                    className={styles.fill}
                    style={{
                        width: inView ? `${item.progress}%` : "0%"
                    }}
                />
            </div>
            <div className={styles.note}>{item.note}</div>
        </div>
    );
}