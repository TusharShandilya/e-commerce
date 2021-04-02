import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { App } from "./components/App";
import { store } from "./store";

import "./styles/main.scss";

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.querySelector("#root")
);
