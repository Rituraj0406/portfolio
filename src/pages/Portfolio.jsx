import Hero from "../components/Sections/Hero";
import Skills from "../components/Sections/Skills";
import Experience from "../components/Sections/Experiences";
import Projects from "../components/Sections/Projects";
import Learning from "../components/Sections/Learnings";
import Contact from "../components/Sections/Contact";
import { useState } from 'react';
import { PORTFOLIO_HERO } from "../data";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Learning", "Contact"];

export default function Portfolio() {
    const [active, setActive] = useState("About");

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())
            ?.scrollIntoView({ behavior: "smooth" });
        setActive(id);
    };

    return (
        <>
            <Hero scrollTo={scrollTo} {...PORTFOLIO_HERO} />
            <Skills />
            <Experience />
            <Projects />
            <Learning />
            <Contact />
        </>
    );
}