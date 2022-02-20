import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import store from "./redux/store";
import {Provider} from "react-redux"


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <Provider store={store}>
      <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
