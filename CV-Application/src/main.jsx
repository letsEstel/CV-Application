import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { InputGeneral } from "./components/general.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InputGeneral></InputGeneral>
  </StrictMode>
);
