/*

    @params product: 
              { 
                category: string
                description: string
                id: string
                image: string
                price: number
                title: string
              }

*/
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { BEMHelper } from "../../../utils";

import { Box } from "../Box";
import { Button } from "../Button";

import "./styles.scss";

export const ProductCard = ({
  product: { id, image, price, title },
  className,
  ...rest
}) => {
  const classHelper = BEMHelper("product-card");

  const productLink = `/product/${id}`;

  return (
    <Box className={classHelper("")}>
      <div className={classHelper("inspect")}>
        <FontAwesomeIcon icon={faSearchPlus} />
      </div>
      <Link to={productLink} className={classHelper("image-wrapper")}>
        <figure className={classHelper("image")}>
          <img src={image} alt={title} />
        </figure>
      </Link>
      <Link to={productLink} className={classHelper("description")}>
        <div className={classHelper("title")}>{title}</div>
        <div className={classHelper("price-wrapper")}>
          {/* <span className={classHelper("price", ["discount"])}></span> */}
          <div className={classHelper("price")}>$ {price} USD</div>
        </div>
      </Link>
      <Button to={productLink} isLink variant="underlined">
        View Product
      </Button>
    </Box>
  );
};

export default ProductCard;
