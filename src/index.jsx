import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import TabletFrame from "./TabletFrame";
import "./styles/global.css";

// Kører vi inde i tablet-rammen (iframe) eller som den ydre "shell"?
const params = new URLSearchParams(window.location.search);
const isEmbedded = params.has("embed") || window.self !== window.top;

createRoot(document.getElementById("root")).render(
  <StrictMode>{isEmbedded ? <App /> : <TabletFrame />}</StrictMode>
);
