import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { Heading, Page, PageHeading } from "../../common";

export const Category = () => {
  const { categories } = useSelector((state) => state.directory);
  const { categoryName } = useParams();
  const pageTitle = categories.filter(
    (category) => category.linkUrl === categoryName
  )[0]?.title;

  return (
    <>
      <PageHeading>
        <Heading className="is-text-captialise has-bg-secondary">
          {pageTitle || "Shopsy"}
          <span className="is-primary">.</span>
        </Heading>
      </PageHeading>
      <Page>Category</Page>
    </>
  );
};
