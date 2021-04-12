import { BEMHelper } from "../../../../utils";

import { Button, Heading, Paragraph } from "../../../common";

import "./styles.scss";

export const ProductInfoCard = ({ product }) => {
  const classHelper = BEMHelper("product-info");

  return (
    <div className={classHelper("")}>
      <Heading size="4">{product.title}</Heading>
      <Heading size="5" className={classHelper("price-span")}>
        {/* <div className={classHelper("price",["discount"])}></div> */}
        <div className={classHelper("price")}>$ {product.price} USD</div>
      </Heading>
      <Paragraph>{product.description}</Paragraph>
      <Button variant="filled">Add to cart</Button>
    </div>
  );
};
