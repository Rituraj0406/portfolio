// import styles from "./Navbar.module.css";
// import { useState, useEffect } from "react";

// export default function Navbar({ links, scrollTo, active, menuOpen }) {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const onScroll = () => setScrolled(window.scrollY > 40);
//         window.addEventListener("scroll", onScroll);
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     return (
//         <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
//             <div className={styles.inner}>
//                 <div className={styles.logo} onClick={() => scrollTo("About")}>RR.</div>

//                 <div className={styles.links} style={{ display: menuOpen ? "none" : "flex" }}>
//                     {links.map((l) => (
//                         <span
//                             key={l}
//                             className={`nav-link ${styles.navLink} ${active === l ? `${styles.active} nav-link--active` : ""
//                                 }`}
//                             onClick={() => scrollTo(l)}
//                         >
//                             {l}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </nav>
//     );
// }


import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar({ links, scrollTo, active }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.inner}>

                {/* Logo */}
                <div className={styles.logo} onClick={() => scrollTo("About")}>
                    RR.
                </div>

                {/* Desktop Links */}
                <div className={styles.links}>
                    {links.map((l) => (
                        <span
                            key={l}
                            className={`nav-link ${styles.navLink} ${active === l ? `${styles.active} nav-link--active` : ""
                                }`}
                            onClick={() => {
                                scrollTo(l);
                                setMenuOpen(false);
                            }}
                        >
                            {l}
                        </span>
                    ))}
                </div>

                {/* Hamburger */}
                <div
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ""
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""
                    }`}
            >
                {links.map((l) => (
                    <span
                        key={l}
                        className={styles.mobileLink}
                        onClick={() => {
                            scrollTo(l);
                            setMenuOpen(false);
                        }}
                    >
                        {l}
                    </span>
                ))}
            </div>
        </nav>
    );
}