import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { apiStatus } from "../../../config/constants";

import { Breadcrumbs, Heading, Loader, Page, PageHeading } from "../../common";

export const Category = () => {
  const { categories, status } = useSelector((state) => state.directory);
  const { categoryName } = useParams();

  const pageTitle =
    status === apiStatus.SUCCESS ? (
      categories.filter((category) => category.linkUrl === categoryName)[0]
        ?.title
    ) : (
      <Loader />
    );

  const breadcrumbData = [{ title: pageTitle }];

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
      <Page>
        <Breadcrumbs data={breadcrumbData} />
      </Page>
    </>
  );
};
