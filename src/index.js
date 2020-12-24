import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="0e64427f-f248-4c01-bdfe-2daeda9f1572" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
