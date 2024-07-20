import Link from "next/link";

import styles from "@/app/styles/common.module.scss";

const RoundButton = ({ type, text, link, onClick }) => {
  return link != null ? (
    <Link href={link}>
      <button className={styles.roundBtn}>{text}</button>
    </Link>
  ) : (
    <button
      type={type || "button"}
      onClick={onClick}
      className={styles.roundBtn}
    >
      {text}
    </button>
  );
};

export default RoundButton;
