import { BEMHelper } from "../../../utils";

import "./styles.scss";

export const PageHeading = ({ children, ...rest }) => {
  const classHelper = BEMHelper("page-heading");

  return (
    <div className={classHelper("")}>
      <div className={classHelper("content")}>{children}</div>
    </div>
  );
};

export default PageHeading;
