import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

const THEME_KEY = "hustlerfit-theme";
const saved = localStorage.getItem(THEME_KEY);
if (saved === "light" || saved === "dark") {
  document.documentElement.setAttribute("data-theme", saved);
} else {
  document.documentElement.setAttribute("data-theme", "dark");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
