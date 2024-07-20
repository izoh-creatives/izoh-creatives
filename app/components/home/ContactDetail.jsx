import styles from "@/app/styles/home.module.scss";
import SocialIcon from "../common/SocialIcon";

const ContactDetail = ({ text, icon, title }) => {
  return (
    <div className={styles.detail}>
      <SocialIcon icon={icon} className={styles.icon} title={title} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ContactDetail;
