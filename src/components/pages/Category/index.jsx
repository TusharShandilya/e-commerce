import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { apiStatus } from "../../../config/constants";
import { getProducts } from "../../../store/shop/shop-actions";
import { BEMHelper } from "../../../utils";

import { Breadcrumbs, Heading, Loader, Page, PageHeading } from "../../common";
import ProductList from "../../common/ProductList";

import "./styles.scss";

export const Category = () => {
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.directory);
  const { products, status: productsStatus } = useSelector(
    (state) => state.shop
  );
  const { categoryName } = useParams();
  const classHelper = BEMHelper("category-page");

  const pageTitle =
    status === apiStatus.SUCCESS ? (
      categories.filter((category) => category.linkUrl === categoryName)[0]
        ?.title
    ) : (
      <Loader />
    );

  const breadcrumbData = [{ title: pageTitle }];

  useEffect(() => {
    dispatch(getProducts(categoryName));
  }, [categoryName]);

  return (
    <>
      <PageHeading>
        <Heading size="1" className="is-text-capitalise has-bg-secondary">
          {pageTitle}
          {status === apiStatus.SUCCESS && (
            <span className="is-primary">.</span>
          )}
        </Heading>
      </PageHeading>
      <Page className={classHelper("")}>
        <Breadcrumbs data={breadcrumbData} />
        <aside className={classHelper("nav")}>hi</aside>
        {productsStatus === apiStatus.SUCCESS ? (
          <ProductList data={products} />
        ) : (
          ""
        )}
      </Page>
    </>
  );
};
