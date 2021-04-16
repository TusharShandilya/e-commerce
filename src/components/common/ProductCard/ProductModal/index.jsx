import { BEMHelper } from "../../../../utils";

import { Button } from "../../Button";
import { Heading } from "../../Heading";
import { Paragraph } from "../../Paragraph";

import "./styles.scss";

export const ProductModal = ({
  product: { id, image, title, price, description },
}) => {
  const classHelper = BEMHelper("product-modal");

  return (
    <div className={classHelper("")}>
      <div className={classHelper("box")}>
        <figure className={classHelper("image")}>
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className={classHelper("box")}>
        <div className="">
          <Heading size="4">{title}</Heading>
          <Heading size="5">$ {price} USD</Heading>
        </div>
        <Paragraph>{description}</Paragraph>
        <form>
          <Button variant="filled">Add to Cart</Button>
        </form>
        <Button isLink to={`/product/${id}`} variant="underlined">
          View Product
        </Button>
      </div>
    </div>
  );
};

export default ProductModal;
