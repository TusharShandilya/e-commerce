import { BEMHelper } from "../../../utils";
import ProductCard from "../ProductCard";

import "./styles.scss";
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

export const ProductList = ({ data, className, ...rest }) => {
  const classHelper = BEMHelper("product-list");

  return (
    <div className={classHelper("", [], className)}>
      {data.map((product) => (
        <div className={classHelper("item")}>
          <ProductCard product={product} key={product.id} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
