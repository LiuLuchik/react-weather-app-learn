import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <footer>
        <a href="https://github.com/LiuLuchik/react-weather-app-learn">Git</a>
      </footer>
    </div>
  </StrictMode>
);
