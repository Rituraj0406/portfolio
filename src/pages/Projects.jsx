import Hero from "../components/Sections/Hero";
import { PROJECTS_HERO, PROJECTS_LISTS } from "../data/index.js";
import ProjectSection from "../components/Projects/ProjectSection.jsx";
import ProjectFooter from "../components/Projects/ProjectsFooter";

const Projects = () => {
  return (
    <>
      <Hero {...PROJECTS_HERO} />
      <main className="max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pb-32 max-[480px]:pb-20">
        {PROJECTS_LISTS.map((proj, i) => (
          <div key={proj.id} id={`project-${proj.id}`}>
            <ProjectSection key={proj.id} project={proj} index={i} />
          </div>
        ))}
      </main>
      <ProjectFooter/>
    </>
  );
};

export default Projects;
