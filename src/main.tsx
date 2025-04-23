import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import ButtonShowcase from "./components/ButtonShowcase";
import MenuShowcase from "./components/MenuShowcase";
import InputsShowcase from "./components/InputShowcase";
import MenuItemShowcase from "./components/MenuItemShowcase";
import SideNavShowcase from "./components/SideNavShowcase";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Component Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/sidenav">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View SideNav Showcase
          </button>
        </Link>
        <Link to="/button">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View Button Showcase
          </button>
        </Link>
        <Link to="/menu">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View Menu Showcase
          </button>
        </Link>
        <Link to="/inputs">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View Inputs Showcase
          </button>
        </Link>
        <Link to="/menuitem">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View MenuItem Showcase
          </button>
        </Link>
      </div>
    </div>
  );
};

const ShowcasePage: React.FC<{ component: React.ReactNode; title: string }> = ({ component, title }) => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Link to="/">
        <button className="absolute top-4 left-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
          Back to Home
        </button>
      </Link>
      <h1 className="text-2xl font-bold text-center py-6">{title}</h1>
      {component}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sidenav"
          element={<ShowcasePage component={<SideNavShowcase />} title="SideNav Showcase" />}
        />
        <Route
          path="/button"
          element={<ShowcasePage component={<ButtonShowcase />} title="Button Showcase" />}
        />
        <Route
          path="/menu"
          element={<ShowcasePage component={<MenuShowcase />} title="Menu Showcase" />}
        />
        <Route
          path="/inputs"
          element={<ShowcasePage component={<InputsShowcase />} title="Inputs Showcase" />}
        />
        <Route
          path="/menuitem"
          element={<ShowcasePage component={<MenuItemShowcase />} title="MenuItem Showcase" />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);