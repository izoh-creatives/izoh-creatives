import styles from "@/app/styles/home.module.scss";
import { technologies } from "@/app/demo/technologies";
import SectionTitle from "../common/SectionTitle";

const Technologies = () => {
  return (
    <div className={styles.myTechnologies}>
      <h3 className={styles.title}>Good In</h3>
      <div className={styles.technologies}>
        {technologies.map((technology, index) => (
          <div key={index} className={styles.technology}>
            <h3 className={styles.title}>{technology.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
