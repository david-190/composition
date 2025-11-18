import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import faviconUrl from "./assets/302c368583d57565a9330712da44b6dc43e6ad16.png";

const existingFavicon = document.querySelector("link[rel='icon']");
if (existingFavicon) {
  existingFavicon.remove();
}

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = faviconUrl;
document.head.appendChild(favicon);

createRoot(document.getElementById("root")!).render(<App />);