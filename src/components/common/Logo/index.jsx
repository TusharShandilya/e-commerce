import ShopifyLogo from "../../../assets/images/Logo.png";

import { BEMHelper } from "../../../utils";

import "./styles.scss";

export const Logo = ({
  // xs | sm | md | lg | xl
  size = "sm",
}) => {
  const classHelper = BEMHelper("logo");

  return (
    <figure className={classHelper("", [size])}>
      <img src={ShopifyLogo} alt="Shopify!" />
    </figure>
  );
};
