import { Redirect, Route, Switch } from "react-router";
import { Category, Home } from ".";

export const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Home} />
      <Route path="/category/:categoryName" exact component={Category} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
