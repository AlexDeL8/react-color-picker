import { StrictMode } from "react";
import ReactDOM from "react-dom";

import MainContainer from "./components/MainContainer.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MainContainer />
  </StrictMode>,
  rootElement
);
