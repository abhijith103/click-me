import React, { useState } from "react";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <div className="background">
        <button className="button" onClick={handleClick}>
          Click Me!
        </button>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h1>Do you want to be my valentine?</h1>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
