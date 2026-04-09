import useInView from "../../hooks/useInView.js";
import FadeIn from "../common/FadeIn";
import StackPill from "../common/StackPill";
import ChallengeBlock from "./ChallengeBlock";
import styles from "./ProjectSection.module.css";

export default function ProjectSection({ project, index }) {
  const [ref, inView] = useInView(0.05);

  return (
    <article
      ref={ref}
      className={`${styles.article} ${inView ? styles.visible : ""}`}
    >
      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerMeta}>
          {/* Number · type row */}
          <div className={styles.metaRow}>
            <span className={styles.index}>0{index + 1}</span>
            <span className={styles.metaDash} />
            <span className={styles.type}>{project.type}</span>
          </div>

          {/* Name */}
          <div className={styles.nameRow}>
            <span className={styles.icon}>{project.icon}</span>
            <h2 className={styles.name}>{project.name}</h2>
          </div>

          {/* Summary */}
          <p className={styles.summary}>{project.summary}</p>
        </div>

        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={styles.githubBtn}
        >
          <span className={styles.githubBtnInner}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </span>
        </a>
      </div>

      {/* ── Body: Stack + Challenges ── */}
      <div className={styles.body}>
        {/* Tech Stack column */}
        <FadeIn delay={0.1}>
          <div className={styles.stackCol}>
            <p className={styles.colLabel}>Tech Stack</p>
            <div className={styles.stackGroups}>
              {project?.stack && Object.entries(project.stack).map(([category, items]) => (
                <div key={category} className={styles.stackGroup}>
                  <p className={styles.stackCategory}>{category}</p>
                  <div className={styles.pillsRow}>
                    {items.map((item) => (
                      <StackPill key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Challenges + Takeaway column */}
        <div className={styles.challengesCol}>
          <FadeIn delay={0.15}>
            <p className={styles.colLabel}>Challenges</p>
          </FadeIn>

          {project.challenges.map((c, i) => (
            <ChallengeBlock key={i} challenge={c} index={i} />
          ))}

          <FadeIn delay={0.3}>
            <div
              className={styles.takeaway}
              style={{
                background: project.accentLight,
                borderLeftColor: project.color,
              }}
            >
              <p
                className={styles.takeawayLabel}
                style={{ color: project.color }}
              >
                Key Takeaway
              </p>
              <p className={styles.takeawayText}>{project.learnings}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
