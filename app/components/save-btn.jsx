"use client";

import { Bookmark } from "lucide-react";
import ProductButton from "./product-button";

const SaveButton = ({ product }) => {
  return (
    <ProductButton
      icon={<Bookmark />}
      title="Save for later"
      onClick={() => {}}
    />
  );
};

export default SaveButton;
