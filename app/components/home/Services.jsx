import styles from "@/app/styles/home.module.scss";
import SectionTitle from "../common/SectionTitle";
import { services } from "@/app/demo/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <SectionTitle title="What I Do" />
      <div className={styles.list}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
