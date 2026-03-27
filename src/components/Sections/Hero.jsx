import styles from "./Hero.module.css"

export default function Hero({ scrollTo }) {
    return (
        <section id="about" style={{background: "#fafaf8"}}>
            <div className={styles.hero}>
                <div style={{}}>
                    <div className={styles.tag}>
                        <span style={{ width: 20, height: 1.5, background: "#8b7355", display: "inline-block" }} />
                        Frontend Developer · Bangalore, India
                    </div>
                </div>
                <div style={{opacity: 0, animation: "fadeUp 0.8s ease 0.25s forwards"}}>
                    <div className={styles.name}>
                        Ritu<br />Raj.
                    </div>
                </div>
                <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.4s forwards" }}>
                    <p className={styles.sub}>
                        5+ years crafting React & Next.js applications — from enterprise dashboards to government systems.
                        I care deeply about clean code, thoughtful UX, and shipping things that actually work.
                    </p>
                </div>
                <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.55s forwards" }}>
                    <div className={styles.cta}>
                        <button
                            className={`btn-primary ${styles.btnPrimary}`}
                            onClick={() => scrollTo("Projects")}
                        >
                            View Projects
                        </button>
                        <button
                            className={`btn-outline ${styles.btnOutline}`}
                            onClick={() => scrollTo("Contact")}
                        >
                            <span>Get in Touch</span>
                        </button>
                    </div>
                </div>
                <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.7s forwards" }}>
                    <div className={styles.stats}>
                        {[["5+", "Years Experience"], ["4", "Companies"], ["10+", "Products Shipped"], ["8", "Devs Led"]].map(([n, l]) => (
                            <div key={l}>
                                <h2 className={styles.statNum}>{n}</h2>
                                <p className={styles.statLabel}>{l}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}