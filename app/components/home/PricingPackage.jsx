import Link from "next/link";

import styles from "@/app/styles/home.module.scss";
import { Check } from "lucide-react";

const PricingPackage = ({ pricingPackage }) => {
  return (
    <div key={pricingPackage.title} className={styles.package}>
      <div className={styles.header}>
        <h2 className={styles.title}>{pricingPackage.title}</h2>
      </div>
      <div className={styles.details}>
        <p className={styles.price}>{`Ksh ${pricingPackage.price}`}</p>
        <div className={styles.features}>
          {pricingPackage.features.map((feature) => (
            <div key={feature} className={styles.feature}>
              <Check className={styles.icon} />
              <p className={styles.text}>{feature}</p>
            </div>
          ))}
        </div>
      </div>
      <Link href="#contacts" className={styles.btn}>
        <div>Get Started</div>
      </Link>
    </div>
  );
};

export default PricingPackage;
