import styles from "@/app/styles/home.module.scss";
import { headerItems } from "@/app/demo/headerItems";
import RoundButton from "../common/RoundButton";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>{headerItems.title}</h1>
        <h3 className={styles.subtitle}>{headerItems.subTitle}</h3>
        <p className={styles.description}>{headerItems.description}</p>
        <RoundButton link={headerItems.btnLink} text={headerItems.btnText} />
      </div>
      <div className={styles.image}>
        <img
          src={headerItems.img}
          alt="Izoh Creatives"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Header;
