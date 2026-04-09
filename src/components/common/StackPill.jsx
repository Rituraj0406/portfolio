import styles from "./StackPill.module.css";

export default function StackPill({ label }) {
  return <span className={styles.pill}>{label}</span>;
}
