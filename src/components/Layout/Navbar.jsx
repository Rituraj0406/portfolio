import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Navbar({ isProjectsPage }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("About");

    // Scroll effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ✅ FIX: Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false); // 🔥 important fix
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())
            ?.scrollIntoView({ behavior: "smooth" });
        setActive(id);
        setMenuOpen(false);
    };

    const navLinks = ["About", "Skills", "Experience", "Projects", "Learning", "Contact"];

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.inner}>

                {/* Logo */}
                <div className={styles.logo}>
                    {isProjectsPage ? (
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                            RR.
                        </Link>
                    ) : (
                        <span onClick={() => scrollTo("About")} style={{ cursor: 'pointer' }}>RR.</span>
                    )}
                </div>

                {/* Desktop Links or Back to Portfolio */}
                <div className={styles.links}>
                    {isProjectsPage ? (
                        <Link
                            to="/"
                            className={`nav-link ${styles.navLink}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            ← Back to Portfolio
                        </Link>
                    ) : (
                        navLinks.map((link) => (
                            <span
                                key={link}
                                className={`nav-link ${styles.navLink} ${active === link ? `${styles.active} nav-link--active` : ""}`}
                                onClick={() => scrollTo(link)}
                            >
                                {link}
                            </span>
                        ))
                    )}
                </div>

                {/* Hamburger - only show on portfolio page */}
                {!isProjectsPage && (
                    <div
                        className={`${styles.hamburger} ${menuOpen ? styles.open : ""
                            }`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                )}
            </div>

            {/* Mobile Menu - only show on portfolio page */}
            {!isProjectsPage && (
                <div
                    className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""
                        }`}
                >
                    {navLinks.map((link) => (
                        <span
                            key={link}
                            className={styles.mobileLink}
                            onClick={() => scrollTo(link)}
                        >
                            {link}
                        </span>
                    ))}
                </div>
            )}
        </nav>
    );
}