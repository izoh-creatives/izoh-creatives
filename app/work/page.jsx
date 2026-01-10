"use client";
import { useEffect, useState } from "react";
import { projectCategories, projects } from "../data";
import CategoryButton from "../components/category-button";
import ProjectCard from "../components/project-card";

const Work = () => {
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
    activeProjects.length > 0 && (
      <div className="flex flex-col items-center space-y-12 px-2 sm:px-1.5 py-8 lg:py-12 xs:px-3 lg:px-8">
        {/* Filter buttons */}
        <div className="flex items-center space-x-5">
          {/* All button */}
          <CategoryButton
            text="All"
            isActive={activeCategory == ""}
            onClick={() => setCategory("")}
          />
          {/* Other buttons */}
          {projectCategories.map((category, index) => (
            <CategoryButton
              key={index}
              text={category.name}
              isActive={activeCategory == category.slug}
              onClick={() => setCategory(category.slug)}
            />
          ))}
        </div>
        {/* Projects */}
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-12 xs:gap-x-0.5 md:gap-x-1 xl:gap-x-4 lg:gap-y-20">
          {activeProjects.map((project, index) => (
            // project
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    )
  );
};

export default Work;
