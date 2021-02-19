import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import App from "./App";

import * as themes from "./theme/schema.json";
import { setToLS } from "./utils/storage";

const rootElement = document.getElementById("root");

const Index = () => {
  setToLS("all-themes", themes.default);
  return <App />;
};
ReactDOM.render(
  <StrictMode>
    <Provider store={Store}>
      <Index />
    </Provider>
  </StrictMode>,
  rootElement
);
