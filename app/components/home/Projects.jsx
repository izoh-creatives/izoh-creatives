import styles from "@/app/styles/home.module.scss";
import SectionTitle from "../common/SectionTitle";
import { projects } from "@/app/demo/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <SectionTitle title="Latest Projects" />
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
