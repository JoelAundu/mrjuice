import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ButtonShowcase from "./components/ButtonShowcase";
import MenuShowcase from "./components/MenuShowcase";
import SideNavShowcase from "./components/SideNavShowcase";
import InputsShowcase from "./components/InputShowcase";
import MenuItemShowcase from "./components/MenuItemShowcase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ButtonShowcase />
    <MenuShowcase />
    <SideNavShowcase />
    <InputsShowcase />
    <MenuItemShowcase/>
  </React.StrictMode>
);


