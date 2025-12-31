import { render } from "preact";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./app";
import { Analytics } from "@vercel/analytics/react";

render(
  <BrowserRouter>
    <App />
    <Analytics />
  </BrowserRouter>,
  document.getElementById("app")!
);
