import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getSingleProduct } from "../../../api/axios";
import { BEMHelper } from "../../../utils";

import { Breadcrumbs, Page, Tabs } from "../../common";
import { ProductInfoCard } from "./ProductInfoCard";

import "./styles.scss";
import { breadcrumbData, tabData } from "./data";

export const Product = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({
    category: "",
    description: "",
    image: "",
    price: 0,
    title: "",
  });

  const classHelper = BEMHelper("product-page");

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  const fetchProduct = async () => {
    let res = await getSingleProduct(productID);

    if (res.ok) {
      setProduct(res.data);
    }
  };

  return (
    <Page className={classHelper("")}>
      <Breadcrumbs data={breadcrumbData(product)} />

      <section className={classHelper("section")}>
        <div className={classHelper("section-box")}>
          <div className={classHelper("image")}>
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <div className={classHelper("section-box")}>
          <ProductInfoCard product={product} />
        </div>
      </section>

      <section className={classHelper("section")}>
        <Tabs data={tabData(product.description)} />
      </section>
    </Page>
  );
};

export default Product;
