import React, { useState } from "react";
import AssignmentList from "./components/AssignmentList";
import htmlcssImage from "./assets/htmlcss.png";
import javascriptImage from "./assets/javascript.png";
import HexagonCursor from "./components/HexagonCursor";

// Default to development URL if environment variable isn't set
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryClick = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 px-6">
      <HexagonCursor />
      <h1 className="text-5xl font-bold text-center text-white mb-12 font-poppins">
        <span className="text-teal-400">Assignments</span>
      </h1>
      <div className="flex justify-center gap-8 mb-12">
        {/* HTML & CSS CARD */}
        <div
          onClick={() => handleCategoryClick("HTML-CSS")}
          className={`cursor-pointer bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-xl p-6 flex flex-col items-center justify-center transition transform hover:scale-105 w-60 ${
            selectedCategory === "HTML-CSS" ? "shadow-2xl shadow-teal-400" : ""
          }`}
        >
          <img src={htmlcssImage} alt="HTML & CSS Logo" className="w-16 mb-4" />
          <h2 className="text-2xl font-semibold">HTML & CSS</h2>
        </div>

        {/* JAVASCRIPT CARD */}
        <div
          onClick={() => handleCategoryClick("JavaScript")}
          className={`cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-xl p-6 flex flex-col items-center justify-center transition transform hover:scale-105 w-60 ${
            selectedCategory === "JavaScript"
              ? "shadow-2xl shadow-indigo-400"
              : ""
          }`}
        >
          <img
            src={javascriptImage}
            alt="JavaScript Logo"
            className="w-16 mb-4"
          />
          <h2 className="text-2xl font-semibold">JavaScript</h2>
        </div>
      </div>

      {selectedCategory && (
        <AssignmentList
          category={selectedCategory}
          apiBaseUrl={API_BASE_URL}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
