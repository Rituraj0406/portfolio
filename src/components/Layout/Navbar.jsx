import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar({ links, scrollTo, active, menuOpen }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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