import Link from "next/link";

import styles from "@/app/styles/home.module.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.project}>
      <img src={project.imageSrc} alt={project.title} className={styles.img} />
      <div className={styles.content}>
        <p className={styles.title}>{project.title}</p>
        <p className={styles.description}>{project.description}</p>
        {project.status == "complete" ? (
          <Link href={project.link} className={styles.link}>
            Check it out
          </Link>
        ) : (
          <div className={`${styles.link} ${styles.disabledLink}`}>Ongoing</div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
