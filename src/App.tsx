import { CssBaseline } from "@material-ui/core";
import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import Reviews from "./components/Reviews";
import Shows from "./components/Shows";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Home />
      <Shows />
      <Reviews />
    </div>
  );
}

export default App;
