import styles from "@/app/styles/common.module.scss";
import RoundButton from "./components/common/RoundButton";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <p className={styles.text}>
        The page you are looking found cannot be found
      </p>
      <RoundButton text="Back to Home" link="/" />
    </div>
  );
};

export default NotFound;
