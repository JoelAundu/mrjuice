// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "./components/buttons/Button";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="p-4 space-x-2">
      <h1 className="text-2xl mb-4 ">Component Library Test</h1>
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
        variant="secondary"
        className="bg-yellow-200 hover:bg-yellow-800"
        onClick={() => alert("Clicked!")}
      >
        click Me
      </Button>
    </div>
  </React.StrictMode>
);
