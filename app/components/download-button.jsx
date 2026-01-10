"use client";

import { useRouter } from "next/navigation";
import slugify from "react-slugify";
import { DownloadIcon } from "lucide-react";
import ProductButton from "./product-button";

const DownloadButton = ({ product, isPaid }) => {
  // Get router for navigation
  const router = useRouter();

  //   Go to payment page
  const goToPayment = () => {
    router.push(`/shop/${slugify(product.title)}/payment`);
  };

  return (
    <div>
      {product.price == "0" || isPaid ? (
        <ProductButton
          icon={<DownloadIcon />}
          title="Download for free"
          onClick={() => {}}
        />
      ) : (
        <ProductButton
          icon={<DownloadIcon />}
          title="Pay and download"
          onClick={goToPayment}
        />
      )}
    </div>
  );
};

export default DownloadButton;
