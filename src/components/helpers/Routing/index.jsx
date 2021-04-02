import { Redirect, Route, Switch } from "react-router";
import { Home } from "../../pages";

export const Routing = () => {
  return (
    <Switch>
      <Route to="/" exact component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
