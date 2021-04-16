import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import { getSingleProduct } from "../../../api/axios";
import { BEMHelper } from "../../../utils";

import { Breadcrumbs, Loader, Page, Tabs } from "../../common";
import { ProductInfoCard } from "./ProductInfoCard";

import "./styles.scss";
import { breadcrumbData, tabData } from "./data";

export const Product = () => {
  const { productID } = useParams();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState();
  const [product, setProduct] = useState({
    category: "",
    description: "",
    image: "",
    price: 0,
    title: "",
  });

  const classHelper = BEMHelper("product-page");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  const fetchProduct = async () => {
    setIsLoading(true);
    let res = await getSingleProduct(productID);
    setIsLoading(false);

    if (res.ok) {
      setProduct(res.data);
    }
  };

  return (
    <Page className={classHelper("", [isLoading && "loading"])}>
      {isLoading ? (
        <Loader className={classHelper("loader")} />
      ) : (
        <>
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
          </section>{" "}
        </>
      )}
    </Page>
  );
};

export default Product;
