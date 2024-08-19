import React from "react";
import { MapComponent } from "./components/MapComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Points } from "./views/Points";
import { Polygons } from "./views/Polygons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/points" />}></Route>
          <Route path="/points" element={<Points />} />
          <Route path="/polygons" element={<Polygons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
