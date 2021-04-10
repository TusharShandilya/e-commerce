import React from "react";
import { useParams } from "react-router";

import "./styles.scss";

export const Product = () => {
  const { productID } = useParams();

  return <div>Product: {productID}</div>;
};

export default Product;
