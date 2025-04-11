import React, { useState } from "react";
import Button from "./buttons/Button";
import AuthButtonGroup from "./buttons/AuthButtonGroup";
// AuthButtonGroup

const ButtonShowcase = () => {
  const [clickCount, setClickCount] = useState(0);
  const [inputsComplete, setInputsComplete] = useState(false);
  const [expenditureError, setExpenditureError] = useState(false);
  const [areaError, setAreaError] = useState(false);

  const fetchOutputs = () => {
    setClickCount((prev) => prev + 1);
    alert("Fetching outputs...");
  };

  const removePolygon = () => {
    setClickCount(0);
    alert("Polygon reset!");
  };

  const toggleInputsComplete = () => {
    setInputsComplete((prev) => !prev);
  };

  const toggleErrors = () => {
    setExpenditureError((prev) => !prev);
    setAreaError((prev) => !prev);
  };

  const handleLogin = () => {
    alert("Logging in...");
  };

  const handleGetStarted = (index) => {
    if (index === 0) {
      alert("Navigating to /feasibility...");
    } else {
      alert("Getting started...");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
        🌟 MrJuice UI Button Showcase 🌟
      </h1>

      {/* Control Panel */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Control Panel
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="slate"
            size="md"
            onClick={toggleInputsComplete}
            className="w-full sm:w-auto"
          >
            Toggle Inputs Complete ({inputsComplete ? "On" : "Off"})
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={toggleErrors}
            className="w-full sm:w-auto"
          >
            Toggle Errors ({expenditureError || areaError ? "On" : "Off"})
          </Button>
          <Button
            variant="danger"
            size="md"
            onClick={() => {
              setClickCount(0);
              setInputsComplete(false);
              setExpenditureError(false);
              setAreaError(false);
            }}
            className="w-full sm:w-auto"
          >
            Reset All
          </Button>
        </div>
        <p className="mt-4 text-gray-600">
          Click Count: <span className="font-bold">{clickCount}</span>
        </p>
      </div>

      {/* Button Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Primary Button */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Primary Button
          </h3>
          <Button
            variant="primary"
            size="md"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full"
          >
            Primary Button
          </Button>
        </div>

        {/* Secondary Button */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Secondary Button
          </h3>
          <Button
            variant="secondary"
            size="md"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full"
          >
            Secondary Button
          </Button>
        </div>

        {/* Danger Button */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Danger Button
          </h3>
          <Button
            variant="danger"
            size="sm"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full"
          >
            Danger Button
          </Button>
        </div>

        {/* Slate Button (Continue) */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Slate Button (Continue)
          </h3>
          <Button
            variant="slate"
            size="md"
            onClick={fetchOutputs}
            disabled={!inputsComplete || !!expenditureError || !!areaError}
            className="w-full sm:w-[108px]"
          >
            Continue
          </Button>
        </div>

        {/* Outline Button (Reset Polygon) */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Outline Button (Reset Polygon)
          </h3>
          <Button
            variant="outline"
            size="md"
            onClick={removePolygon}
            className="w-full sm:w-[72px]"
          >
            Reset Polygon
          </Button>
        </div>

        {/* Ocean Button */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Ocean Button
          </h3>
          <Button
            variant="ocean"
            size="md"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full"
          >
            Ocean Button
          </Button>
        </div>

        {/* Coral Button */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Coral Button
          </h3>
          <Button
            variant="coral"
            size="md"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full"
          >
            Coral Button
          </Button>
        </div>

        {/* Sky Button */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Sky Button
          </h3>
          <Button
            variant="sky"
            size="md"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full"
          >
            Sky Button
          </Button>
        </div>

        {/* Storm Button */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Storm Button
          </h3>
          <Button
            variant="storm"
            size="md"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full"
          >
            Storm Button
          </Button>
        </div>

        {/* Crimson Button */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Crimson Button
          </h3>
          <Button
            variant="crimson"
            size="md"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full"
          >
            Crimson Button
          </Button>
        </div>

        {/* Lime Button */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Lime Button
          </h3>
          <Button
            variant="lime"
            size="md"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full"
          >
            Lime Button
          </Button>
        </div>

        {/* AuthButtonGroup - Variation 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Auth Button Group (Variation 1)
          </h3>
          <AuthButtonGroup
            mode="dual"
            onLoginClick={handleLogin}
            onGetStartedClick={() => handleGetStarted()}
            className="w-full"
            containerBackground="white"
            textSize="xs"
          />
        </div>

        {/* AuthButtonGroup - Variation 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Auth Button Group (Variation 2)
          </h3>
          <AuthButtonGroup
            mode="single"
            onGetStartedClick={() => handleGetStarted(0)}
            getStartedLabel="Feasibility"
            className="w-full"
            containerBackground="dark"
            textSize="sm"
            showArrow
            circleBackgroundSrc="/assets/circle-white.png"
            circleBackgroundClassName="w-12 h-12 md:w-14 md:h-14"
          />
        </div>

        {/* AuthButtonGroup - Variation 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Auth Button Group (Variation 3)
          </h3>
          <AuthButtonGroup
            mode="dual"
            onGetStartedClick={() => handleGetStarted()}
            loginLabel=""
            className="w-full p-[5px]"
            loginClassName="pl-5"
            getStartedClassName="p-3.5"
            containerBackground="white"
            textSize="base"
            showArrow
            arrowIconSrc="/assets/arrow-right.png"
          />
        </div>

        {/* AuthButtonGroup - Variation 4 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Auth Button Group (Variation 4)
          </h3>
          <AuthButtonGroup
            mode="single"
            onGetStartedClick={() => handleGetStarted()}
            className="w-full max-w-[280px] h-[50px] md:h-[58px] gap-8 pl-4 md:pl-6 pr-4 mb-10 md:mb-20"
            containerBackground="dark"
            textSize="sm"
            showArrow
            circleBackgroundSrc="/assets/circle-white.png"
            circleBackgroundClassName="w-10 h-10 md:w-12 md:h-12"
            arrowIconClassName="w-4 h-4 md:w-5 md:h-5"
          />
        </div>

        {/* AuthButtonGroup - Variation 5 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Auth Button Group (Variation 5)
          </h3>
          <AuthButtonGroup
            mode="dual"
            onLoginClick={handleLogin}
            onGetStartedClick={() => handleGetStarted()}
            className="w-full pl-4 p-1"
            loginClassName="mr-4"
            getStartedClassName="px-6 py-3"
            containerBackground="white"
            textSize="xs"
          />
        </div>

        {/* Custom Overrides Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Tailwind Override (Yellow)
          </h3>
          <Button
            variant="primary"
            size="md"
            className="!bg-yellow-200 hover:!bg-yellow-800 w-full"
            onClick={() => alert("Clicked!")}
          >
            click Me
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Tailwind Override (Black)
          </h3>
          <Button
            variant="secondary"
            size="md"
            className="!bg-black hover:!bg-yellow-800 !text-white w-full"
            onClick={() => alert("Clicked!")}
          >
            click Me
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Inline CSS Override (Green)
          </h3>
          <style>
            {`
              .custom-hover:hover {
                background-color: #b45309 !important; /* Amber-800 equivalent */
              }
              .custom-button-hover:hover {
                background-color: #6b21a8 !important; /* Purple-800 equivalent */
              }
            `}
          </style>
          <Button
            variant="primary"
            size="md"
            style={{ backgroundColor: "green" }}
            className="custom-button-hover w-full"
            onClick={() => alert("Custom Button Clicked!")}
          >
            Custom Button
          </Button>
        </div>

        {/* Tailwind Test */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Tailwind Test
          </h3>
          <button className="bg-yellow-200 w-full p-4 rounded-md">
            taiwlindcss
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600">
        <p>Built with ❤️ by MrJuice UI Team</p>
        <p>Version 1.0.8 | © 2025</p>
      </footer>
    </div>
  );
};

export default ButtonShowcase;
