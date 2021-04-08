import ShopifyLogo from "../../../assets/images/Logo.png";

import { BEMHelper } from "../../../utils";

import "./styles.scss";

// @params size: xs | sm | md | lg | xl

export const Logo = ({ size = "sm" }) => {
  const classHelper = BEMHelper("logo");

  return (
    <figure className={classHelper("", [size])}>
      <img src={ShopifyLogo} alt="Shopify!" />
    </figure>
  );
};
