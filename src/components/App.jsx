import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "./pages/routing";
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
