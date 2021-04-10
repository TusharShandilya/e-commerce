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

import { ProductCard } from "../ProductCard";

import "./styles.scss";

export const ProductList = ({ data, className, noData, ...rest }) => {
  const classHelper = BEMHelper("product-list");

  return (
    <div className={classHelper("", [], className)}>
      {!!data ? (
        data.map((product) => (
          <div className={classHelper("item")} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <div className={classHelper("empty")}>{noData}</div>
      )}
    </div>
  );
};

export default ProductList;
