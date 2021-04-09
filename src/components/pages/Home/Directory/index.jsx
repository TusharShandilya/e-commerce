import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { apiStatus } from "../../../../config/constants";
import { BEMHelper } from "../../../../utils";
import { Heading } from "../../../common";

import "./styles.scss";

export const Directory = () => {
  const { categories, status } = useSelector((state) => state.directory);
  const classHelper = BEMHelper("directory");

  const dirCategories =
    status === apiStatus.SUCCESS ? categories.slice(0, 4) : [];

  return (
    <section className={classHelper("")}>
      {dirCategories.map((category, idx) => (
        <Link
          to={`/category/${category.linkUrl}`}
          className={classHelper("box")}
          key={`directory-${idx}`}
        >
          <Heading size="2" className="is-text-capitalise">
            {category.title}
            <span className="is-primary">.</span>
          </Heading>

          <img src={category.imageUrl} alt={`${category.title}`} />
        </Link>
      ))}
    </section>
  );
};

export default Directory;
