import styles from "@/app/styles/common.module.scss";

const SocialIcon = ({ icon, title }) => {
  return (
    <div className={styles.socialIcon} title={title}>
      {icon}
    </div>
  );
};

export default SocialIcon;
