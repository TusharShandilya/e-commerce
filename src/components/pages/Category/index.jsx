import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { apiStatus } from "../../../config/constants";

import { Heading, Loader, Page, PageHeading } from "../../common";

export const Category = () => {
  const { categories, status } = useSelector((state) => state.directory);
  const { categoryName } = useParams();

  const pageTitle =
    status === apiStatus.LOADING ? (
      <Loader />
    ) : (
      <>
        {
          categories.filter((category) => category.linkUrl === categoryName)[0]
            ?.title
        }
        <span className="is-primary">.</span>
      </>
    );

  return (
    <>
      <PageHeading>
        <Heading size="1" className="is-text-captialise has-bg-secondary">
          {pageTitle}
        </Heading>
      </PageHeading>
      <Page>Category</Page>
    </>
  );
};
