// App.js
import React, { useState } from "react";
import "./App.css";
import WordComponent from "./Components/WordComponent";
import ParaComponent from "./Components/ParaComponent";

function App() {
  const [selectedInput, setSelectedInput] = useState("word");

  return (
    <div className="app-container">
      <h1 className="app-title">Text Analyzer</h1>
      <p className="app-description">
        Text Analyzer is a simple free online tool for SEO web content analysis
        that helps you find most frequent phrases and words, number of
        characters, words, sentences and paragraphs, and estimated read and
        speak time of your content.
      </p>
      <div className="input-selector">
        <button
          className={"input-selector-button " + (selectedInput === "word" ? "selected" : "")}
          onClick={() => setSelectedInput("word")}
        >
          Word Input
        </button>
        <button
          className={"input-selector-button " + (selectedInput === "paragraph" ? "selected" : "")}
          onClick={() => setSelectedInput("paragraph")}
        >
          Paragraph Input
        </button>
      </div>
      <div className="input-container">
        {selectedInput === "word" ? <WordComponent/> : <ParaComponent/>}
      </div>
    </div>
  );
}

export default App;

