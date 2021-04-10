import { BEMHelper } from "../../../utils";
import Box from "../Box";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

import "./styles.scss";
/*

    @params category: string
    @params description: string
    @params id: string
    @params image: string
    @params price: number
    @params title: string

*/

export const ProductCard = ({
  product: { category, description, id, image, price, title },
  className,
  ...rest
}) => {
  const classHelper = BEMHelper("product-card");

  return (
    <Box>
      <Heading>{title}</Heading>
      <Heading size="5">{category}</Heading>
      <Paragraph>{description}</Paragraph>
      <figure className={classHelper("image-wrapper")}>
        <img src={image} alt={title} />
      </figure>
      <Paragraph>${price}</Paragraph>
    </Box>
  );
};

export default ProductCard;
