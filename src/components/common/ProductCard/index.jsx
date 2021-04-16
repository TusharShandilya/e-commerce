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
import { useModal } from "../../../library/hooks";

import { BEMHelper } from "../../../utils";

import { Box } from "../Box";
import { Button } from "../Button";
import { Modal } from "../Modal";
import ProductModal from "./ProductModal";

import "./styles.scss";

export const ProductCard = ({ product, className }) => {
  const { isModalActive, toggleModal } = useModal();
  const { id, image, price, title } = product;

  const classHelper = BEMHelper("product-card");

  const productLink = `/product/${id}`;

  return (
    <Box className={classHelper("", [], className)}>
      {isModalActive && (
        <Modal closeModal={toggleModal}>
          <ProductModal product={product} />{" "}
        </Modal>
      )}
      <div className={classHelper("inspect")} onClick={toggleModal}>
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
