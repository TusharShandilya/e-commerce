/*
data: 
  {
    category: string
    description: string
    id: string
    image: string
    price: number
    title: string
  }
*/
import { BEMHelper } from "../../../utils";

import { Button } from "../Button";
import { Heading } from "../Heading";
import { ProductCard } from "../ProductCard";

import "./styles.scss";
import outOfStock from "../../../assets/illustrations/empty-stock.svg";

export const ProductList = ({ data, className, ...rest }) => {
  const classHelper = BEMHelper("product-list");

  return (
    <div className={classHelper("", [], className)}>
      {!!data.length ? (
        data.map((product) => (
          <div className={classHelper("item")} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <div className={classHelper("empty")}>
          <img src={outOfStock} alt={"out of stock"} />
          <Heading>Out of stock!</Heading>
          <Button isLink to="/" variant="outlined">
            Go to Home
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
