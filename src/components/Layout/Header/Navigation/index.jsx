import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { actions } from "../../../../store/actions";

import { BEMHelper, convertKebabCase } from "../../../../utils";

import "./styles.scss";

export const Navigation = () => {
  const { categories } = useSelector((state) => state.directory);
  const dispatch = useDispatch();

  const classHelper = BEMHelper("nav");

  useEffect(() => {
    dispatch(actions.storeCategories());
  }, []);

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
          to={`/category/${convertKebabCase(category)}`}
          activeClassName={classHelper("link", ["active"])}
          className={classHelper("link")}
        >
          {category}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
