import FadeIn from "../common/FadeIn";
import styles from "./ChallengeBlock.module.css";

export default function ChallengeBlock({ challenge, index }) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className={styles.block}>
        <h4 className={styles.title}>{challenge.title}</h4>
        <p className={styles.desc}>{challenge.desc}</p>
      </div>
    </FadeIn>
  );
}