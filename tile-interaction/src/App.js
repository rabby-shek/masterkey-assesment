// src/App.js
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [outputString, setOutputString] = useState("");

  const handleTileClick = (letter) => {
    let newString = outputString + letter;
    newString = replaceConsecutiveLetters(newString);
    setOutputString(newString);
  };

  const replaceConsecutiveLetters = (str) => {
    return str.replace(/(.)\1{2,}/g, "_");
  };

  return (
    <div className="app">
      <div className="tile-container">
        {Array.from({ length: 26 }, (_, i) => (
          <div
            key={i}
            className="tile"
            onClick={() => handleTileClick(String.fromCharCode(65 + i))}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
      <div id="outputString" className="output-string">
        {outputString}
      </div>
    </div>
  );
};

export default App;
