// WordComponent.js
import React, { useState } from "react";
import { countCharacters, countWords } from "../utils/counterFunctions";
import "./style.css";

const WordComponent = () => {
  const [text, setText] = useState("");
  return (
    <div className="word-input-container">
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="process-button">Process Word</button>
      </div>
      <table className="stats-table">
        <thead className="table-header">
          <tr>
            <th className="table-header-cell">Characters</th>
            <th className="table-header-cell">Words</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td className="table-data">{countCharacters(text)}</td>
            <td className="table-data">{countWords(text)}</td>
          </tr>
        </tbody>
      </table>
      <div className="info-container">
        <div className="info-row">
          <p className="info-label">Defination:</p>
          <p className="info-value">
            in, relating to, or characteristic of a town or city. "the urban
            population"
          </p>
        </div>
        <div className="info-row">
          <p className="info-label">Parts of Speech:</p>
          <p className="info-value">Noun</p>
        </div>
        <div className="info-row">
          <p className="info-label">Synonyms:</p>
          <p className="info-value">Town</p>
        </div>
        <div className="info-row">
          <p className="info-label">Antonyms:</p>
          <p className="info-value">Rural</p>
        </div>
      </div>
    </div>
  );
};

export default WordComponent;
