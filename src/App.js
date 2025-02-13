import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false); // Fixed this line

  const openEnvelope = () => {
    setIsOpen(true);
    // Reset canExpand to false when opening
    setCanExpand(false);
    // Set canExpand to true after 1 second
    setTimeout(() => {
      setCanExpand(true);
    }, 1000);
  };
  const closeEnvelope = () => {
    setIsOpen(false);
  };

  const expandLetter = () => {
    if (canExpand) {
      // Only expand if canExpand is true
      setIsExpanded(true);
    }
  };

  const closeLetter = () => {
    setIsExpanded(false);
    setIsOpen(false);
    setCanExpand(false);
  };

  return (
    <div className="App">
      <div className="envlope-wrapper">
        <div
          id="envelope"
          className={`${isOpen ? "open" : "close"} ${
            isExpanded ? "expanded" : ""
          }`}
        >
          <div className="letter" onClick={expandLetter}>
            <div className="words line1"></div>
            <div className="words line2"></div>
            <div className="words line3"></div>
            <div className="words line4"></div>
          </div>
          <div className="pocket" onClick={openEnvelope}></div>
          <div className="flap"></div>
        </div>
      </div>
      {isExpanded && (
        <button className="close-button" onClick={closeLetter}>
          Close
        </button>
      )}

      <div className="reset">
        <button onClick={openEnvelope}>Open</button>
        <button onClick={closeEnvelope}>Close</button>
      </div>
    </div>
  );
}

export default App;
