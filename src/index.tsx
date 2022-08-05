import React from "react";
import ReactDOM from "react-dom/client";
import "@src/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "@src/store";
import { ThemeProvider } from "./lib/contexts/ThemeContext";
import { MobileMenuProvider } from "./lib/contexts/MobileMenuContext";
import { FullscreenProvider } from "./lib/contexts/FullscreenContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <FullscreenProvider>
      <MobileMenuProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MobileMenuProvider>
    </FullscreenProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
