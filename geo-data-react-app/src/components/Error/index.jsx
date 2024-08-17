import React from "react";
import "./index.css";
const ErrorComponent = ({ message }) => {
  return (
    <div className="error">
      <h2>Something went wrong</h2>
      <p>{message || "An unexpected error occurred."}</p>
    </div>
  );
};

export default ErrorComponent;
