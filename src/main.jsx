// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "./components/buttons/Button";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <div className="p-4 space-x-2">
      <h1 className="text-2xl mb-4 ">Component Library Test</h1>
      <style>
        {`
          .custom-hover:hover {
            background-color: #b45309; /* Amber-800 equivalent */
          }
          .custom-button-hover:hover {
            background-color: #6b21a8; /* Purple-800 equivalent */
          }
        `}
      </style>
      <Button variant="primary" size="md">
        Primary Button
      </Button>
      <Button variant="secondary" size="md" className="ml-2">
        Secondary Button
      </Button>
      <Button variant="danger" size="sm" className="ml-2">
        Danger Button
      </Button>
      <Button
        variant="primary"
        size="md"
        className="bg-yellow-200 hover:bg-yellow-800"
        onClick={() => alert("Clicked!")}
      >
        click Me
      </Button>
      <button className="bg-yellow-200 w-32 p-4 radius-4">taiwlindcss</button>
      <Button
        variant="secondary"
        size="md"
        className="!bg-black hover:!bg-yellow-800 !text-white"
        onClick={() => alert("Clicked!")}
      >
        click Me
      </Button>
      <Button
        variant="primary"
        size="md"
        style={{ backgroundColor: "green" }}
        className="custom-button-hover ml-2"
        onClick={() => alert("Custom Button Clicked!")}
      >
        Custom Button
      </Button>
    </div>
  </React.StrictMode>
);
