"use client";
import { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projects, projectCategories } from "../data";
import CategoryButton from "./category-button";
import ProjectCard from "./project-card";

const Projects = () => {
  // State variables
  const [activeCategory, setCategory] = useState("");
  const [activeProjects, setProjects] = useState([]);

  // Update projects when active category changes
  useEffect(() => {
    setProjects(
      activeCategory == ""
        ? projects
        : projects.filter((project) => project.category == activeCategory)
    );
  }, [activeCategory]);

  return (
    <div
      id="projects"
      className="flex flex-col space-y-12 pl-3 pr-7 py-8 lg:py-16 sm:pl-1 sm:pr-4 lg:px-8"
    >
      {/* Heading and buttons */}
      <div className="flex flex-col items-center">
        {/* Heading */}
        <div className="flex flex-col items-center space-y-2 mb-8">
          {/* Heading */}
          <SectionHeading text="Latest Projects" />
        </div>
        {/* Filter buttons */}
        <div className="flex items-center space-x-5">
          <CategoryButton
            text="All"
            isActive={activeCategory == ""}
            onClick={() => setCategory("")}
          />
          {projectCategories.map((category, index) => (
            <CategoryButton
              key={index}
              text={category.name}
              isActive={activeCategory == category.slug}
              onClick={() => setCategory(category.slug)}
            />
          ))}
        </div>
      </div>
      {/* Projects */}
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  sm:gap-x-2 md:gap-x-2 lg:gap-x-7 lg:gap-y-20 px-1.5">
        {activeProjects
          .filter((project, index) => index <= 7)
          .map((project, index) => (
            // project
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
