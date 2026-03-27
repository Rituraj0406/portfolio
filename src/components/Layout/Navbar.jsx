import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar({ links, scrollTo, active, menuOpen }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const s = {
        navLink: (isActive) => ({
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem", fontWeight: 500,
            letterSpacing: "0.06em", textTransform: "uppercase",
            cursor: "pointer", color: isActive ? "#1a1a1a" : "#6b6b6b",
            position: "relative",
            paddingBottom: "4px",
            transition: "color 0.2s ease",
        }),
    }
    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.inner}>
                <div className={styles.logo} onClick={() => scrollTo("About")}>RR.</div>

                <div className={styles.links} style={{ display: menuOpen ? "none" : "flex" }}>
                    {links.map((l) => (
                        <span
                            key={l}
                            className={`nav-link ${styles.navLink} ${active === l ? `${styles.active} nav-link--active` : ""
                                }`}
                            onClick={() => scrollTo(l)}
                        >
                            {l}
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    );
}