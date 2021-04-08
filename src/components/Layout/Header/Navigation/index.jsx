import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { apiStatus } from "../../../../config/constants";
import { BEMHelper } from "../../../../utils";

import Loader from "../../../common/Loader";

import "./styles.scss";

export const Navigation = () => {
  const { categories, status } = useSelector((state) => state.directory);

  const classHelper = BEMHelper("nav");

  return (
    <nav className={classHelper("")}>
      <NavLink
        to="/"
        exact
        strict
        activeClassName={classHelper("link", ["active"])}
        className={classHelper("link")}
      >
        home
      </NavLink>
      {status === apiStatus.LOADING ? (
        <Loader />
      ) : (
        categories.map((category, idx) => (
          <NavLink
            key={`link-${idx}`}
            to={`/category/${category.linkUrl}`}
            activeClassName={classHelper("link", ["active"])}
            className={classHelper("link")}
          >
            {category.title}
          </NavLink>
        ))
      )}
    </nav>
  );
};

export default Navigation;
