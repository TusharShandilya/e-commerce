// @params data: { title: string | JSX.Element; path: string; }[]

import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BEMHelper } from "../../../utils";

import "./styles.scss";

export const Breadcrumbs = ({ data = [], className = "" }) => {
  const classHelper = BEMHelper("breadcrumbs");
  const crumbs = [
    { title: <FontAwesomeIcon icon={faHome} />, path: "/" },
    ...data,
  ];

  return (
    <div className={classHelper("", [], className)}>
      {crumbs.map(({ title, path }, idx) =>
        !!path ? (
          <Link key={idx} to={path} className={classHelper("crumb")}>
            {title}
          </Link>
        ) : (
          <span className={classHelper("crumb")} key={idx}>
            {title}
          </span>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
