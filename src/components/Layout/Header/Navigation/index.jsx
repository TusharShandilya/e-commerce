import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { BEMHelper } from "../../../../utils";

import "./styles.scss";

export const Navigation = () => {
  const { categories } = useSelector((state) => state.directory);

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
      {categories.map((category, idx) => (
        <NavLink
          key={`link-${idx}`}
          to={`/category/${category.linkUrl}`}
          activeClassName={classHelper("link", ["active"])}
          className={classHelper("link")}
        >
          {category.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
