// src/Loader.js
import React from "react";
import "./index.css"; // Optional: for custom styles

function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p className="spinner-text">Loading...</p>
    </div>
  );
}

export default Loader;
