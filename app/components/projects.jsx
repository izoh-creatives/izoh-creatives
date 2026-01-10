"use client";
import { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projects, projectCategories } from "../data";
import CategoryButton from "./category-button";
import ProjectCard from "./project-card";
import Link from "next/link";

const Projects = () => {
  // State variables
  const [activeCategory, setCategory] = useState("");
  const [activeProjects, setProjects] = useState([]);

  // Update projects when active category changes
  useEffect(() => {
    setProjects(
      activeCategory == ""
        ? projects.filter((project) => project.featured == true)
        : projects.filter(
            (project) =>
              project.category == activeCategory && project.featured == true
          )
    );
  }, [activeCategory]);

  return (
    activeProjects.length > 0 && (
      <div
        id="projects"
        className="flex flex-col items-center space-y-12 pl-2 pr-3 py-8 lg:py-10.5 sm:pl-1 sm:pr-4 lg:px-8"
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
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-12 xs:gap-x-0.5 md:gap-x-1 xl:gap-x-4 lg:gap-y-20 ">
          {activeProjects
            .filter((project, index) => index <= 7)
            .map((project, index) => (
              // project
              <ProjectCard key={index} project={project} />
            ))}
        </div>
        {/* View more button */}
        <Link href="/work">
          <button className="bg-red-500 text-xs rounded-2xl px-4.5 py-2.25 mt-4 hover:bg-red-700 transition duration-800">
            View more
          </button>
        </Link>
      </div>
    )
  );
};

export default Projects;
