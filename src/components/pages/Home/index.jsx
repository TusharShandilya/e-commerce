import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiStatus } from "../../../config/constants";
import { getProducts } from "../../../store/shop/shop-actions";
import { BEMHelper } from "../../../utils";

import { Heading, Page, ProductList } from "../../common";
import Directory from "./Directory";

import "./styles.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const { collections, status } = useSelector((state) => state.shop);

  const classHelper = BEMHelper("home-page");

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productData = Object.values(collections).flat().slice(0, 8);

  console.log(productData);

  return (
    <Page className={classHelper("")}>
      {status === apiStatus.SUCCESS && !!productData.length && (
        <section className={classHelper("section")}>
          <Heading
            size="2"
            className={classHelper("title", [], "has-text-centered")}
          >
            Most Popular
          </Heading>
          <ProductList data={productData} />
        </section>
      )}
      <section className={classHelper("section")}>
        <Directory className={classHelper("")} />
      </section>
    </Page>
  );
};
