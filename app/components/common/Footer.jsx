import Link from "next/link";

import styles from "@/app/styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        Copyright &copy; Izoh Creatives.Web designed by
        <Link
          href="https://www.izohcreatives.co.ke/"
          className={styles.designer}
        >
          Izoh Creatives
        </Link>
      </div>
      <Link href="#" className={styles.upBtn}>
        Back to Top
      </Link>
    </div>
  );
};

export default Footer;
