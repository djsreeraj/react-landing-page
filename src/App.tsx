import { CssBaseline } from "@material-ui/core";
import React from "react";
import "./App.css";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Home />
    </div>
  );
}

export default App;
