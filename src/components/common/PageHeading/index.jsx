import { BEMHelper } from "../../../utils";

import "./styles.scss";

export const PageHeading = ({ children, className, ...rest }) => {
  const classHelper = BEMHelper("page-heading");

  return (
    <div className={classHelper("", [], className)}>
      <div className={classHelper("content")}>{children}</div>
    </div>
  );
};

export default PageHeading;
