import { CssBaseline } from "@material-ui/core";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import Shows from "./components/Shows";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <CssBaseline />

      {/* <NavBar />
      <Header />
      <Stats />
      <Shows />
      <Reviews /> */}

      <Home />
    </div>
  );
}

export default App;
