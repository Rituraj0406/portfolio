import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Sections/Hero";
import Skills from "../components/Sections/Skills";
import Experience from "../components/Sections/Experiences";
import Projects from "../components/Sections/Projects";
import Learning from "../components/Sections/Learnings";
import Contact from "../components/Sections/Contact";
import {useState} from 'react'

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Learning", "Contact"];

export default function Portfolio() {
    const [active, setActive] = useState("About");
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())
            ?.scrollIntoView({ behavior: "smooth" });
        setActive(id);
        setMenuOpen(false);
    };

    return (
        <>
            <Navbar links={NAV_LINKS} scrollTo={scrollTo} active={active} menuOpen={menuOpen} />
            <Hero scrollTo={scrollTo} />
            <Skills />
            <Experience />
            <Projects />
            <Learning />
            <Contact />
        </>
    );
}