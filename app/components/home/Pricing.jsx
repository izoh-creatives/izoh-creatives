import Link from "next/link";

import styles from "@/app/styles/home.module.scss";
import SectionTitle from "@/app/components/common/SectionTitle";
import { pricingPackages } from "@/app/demo/pricingPackages";
import PricingPackage from "./PricingPackage";

const Pricing = () => {
  return (
    <div className={styles.pricing} id="pricing">
      <SectionTitle title="Pricing" />
      <div className={styles.packages}>
        {pricingPackages.map((pricingPackage, index) => (
          <PricingPackage key={index} pricingPackage={pricingPackage} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
