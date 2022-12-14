import React from "react";
import Search from "./Search";
import './App.css';


function App() {
  return (
    <div className="App">
     <h2 className="header">Current Weather</h2>
        <Search />

        <p id="github-link">
          <a
            href="https://github.com/ltasker443/weather-react"
            target="blank"
            id="github-link"
            >Open-source</a> by Laura Tasker
      </p>
      </div>
  );
}

export default App;
