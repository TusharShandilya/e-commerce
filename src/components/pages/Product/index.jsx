import React from "react";
import { useParams } from "react-router";

import { Page, Tabs } from "../../common";
import { tabData } from "./data";

import "./styles.scss";

export const Product = () => {
  const { productID } = useParams();

  const description = "lorem ipsum";

  return (
    <Page>
      <Tabs data={tabData(description)} />
    </Page>
  );
};

export default Product;
