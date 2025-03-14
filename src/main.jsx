import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Analytics />
  </>
);
