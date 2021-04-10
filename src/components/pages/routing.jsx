import { Redirect, Route, Switch } from "react-router";

import { Category, Home, Product } from ".";

export const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Home} />
      <Route path="/category/:categoryName" exact component={Category} />
      <Route path="/product/:productID" exact component={Product} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
