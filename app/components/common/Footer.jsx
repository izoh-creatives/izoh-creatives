import Link from "next/link";

import styles from "@/app/styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        Copyright &copy; Izoh Creatives.Web designed by
        <Link href="/" className={styles.designer}>
          Izoh
        </Link>
      </div>
      <Link href="#" className={styles.upBtn}>
        Back to Top
      </Link>
    </div>
  );
};

export default Footer;
