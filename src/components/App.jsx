import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "./helpers/Routing";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>
  );
};
