import { useState } from "react";
import styles from "./Hero.module.css"
import { splitTwoLines } from "../../utils/utils";

export default function Hero({ scrollTo, tag, name, sub, stats, cta }) {
    const [first, last] = name.split(" ");

    return (
        <section id="about" style={{background: "#fafaf8"}}>
            <div className={styles.hero}>
                <div>
                    <div className={styles.tag}>
                        <span style={{ width: 20, height: 1.5, background: "#8b7355", display: "inline-block" }} />
                        {/* Frontend Developer · Bangalore, India */}
                        {tag}
                    </div>
                </div>
                <div style={{opacity: 0, animation: "fadeUp 0.8s ease 0.25s forwards"}}>
                    <div className={styles.name}>
                        {/* Ritu<br />Raj. */}
                        {splitTwoLines(name)}
                    </div>
                </div>
                <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.4s forwards" }}>
                    <p className={styles.sub}>
                        {sub}
                        {/* 5+ years crafting React & Next.js applications — from enterprise dashboards to government systems.
                        I care deeply about clean code, thoughtful UX, and shipping things that actually work. */}
                    </p>
                </div>
                {cta && (
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
                )}
                {stats &&<div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.7s forwards" }}>
                    <div className={styles.stats}>
                        {stats.map(([n, l]) => (
                            <div key={l}>
                                <h2 className={styles.statNum}>{n}</h2>
                                <p className={styles.statLabel}>{l}</p>
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </section>
    );
}