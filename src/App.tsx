import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import Shows from "./components/Shows";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Stats />
      <Shows />
      <Reviews />
    </div>
  );
}

export default App;
