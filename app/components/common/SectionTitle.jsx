import React from "react";

import styles from "@/app/styles/common.module.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.sectionTitle}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default SectionTitle;
