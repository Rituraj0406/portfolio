import styles from "./ProjectsFooter.module.css";

export default function ProjectsFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>© 2025 Ritu Raj</span>
        <a href="/" className={styles.backLink}>← Back to Portfolio</a>
      </div>
    </footer>
  );
}
