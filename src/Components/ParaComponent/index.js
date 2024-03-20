// ParaComponent.js
import React, { useState } from "react";
import {
  countCharacters,
  countParagraphs,
  countPunctuations,
  countSentences,
  countSpaces,
  countWords,
} from "../utils/counterFunctions";
import "./style.css";

const ParaComponent = () => {
  const [text, setText] = useState("");
  return (
    <div className="paragraph-input-container">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        placeholder="Type or copy/paste your content here..."
      ></textarea>
      <table className="stats-table">
        <thead className="table-header">
          <th className="table-header-cell">Characters</th>
          <th className="table-header-cell">Words</th>
          <th className="table-header-cell">Sentences</th>
          <th className="table-header-cell">Paragraphs</th>
          <th className="table-header-cell">Spaces</th>
          <th className="table-header-cell">Punctuations</th>
        </thead>
        <tbody>
          <tr className="table-row">
            <td className="table-data">{countCharacters(text)}</td>
            <td className="table-data">{countWords(text)}</td>
            <td className="table-data">{countSentences(text)}</td>
            <td className="table-data">{countParagraphs(text)}</td>
            <td className="table-data">{countSpaces(text)}</td>
            <td className="table-data">{countPunctuations(text)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParaComponent;
