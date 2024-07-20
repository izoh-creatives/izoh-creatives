import styles from "@/app/styles/home.module.scss";

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.service}>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
