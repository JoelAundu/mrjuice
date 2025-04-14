import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ButtonShowcase from "./components/ButtonShowcase";
import MenuShowcase from "./components/MenuShowcase";
import SideNavShowcase from "./components/SideNavShowcase";
import InputsShowcase from "./components/InputShowcase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ButtonShowcase />
    <MenuShowcase />
    <SideNavShowcase />
    <InputsShowcase />
  </React.StrictMode>
);


