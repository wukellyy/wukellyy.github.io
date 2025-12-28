import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-white scroll-mt-24">
      <div className="section-container">
        <div className="flex flex-col justify-center items-center">
          <h2 className="section-title mb-8">My Projects</h2>
          <div className="flex flex-col gap-4">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
