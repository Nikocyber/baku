import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  let siyahi = ["Rock", "Paper", "Scissors"];
  const [num, setNum] = useState("Rock");
  let robot = siyahi[Math.floor(Math.random() * 3)];
  let n;

  if (robot === num) {
    n = "Bərabər! 🟣";
  } else if (
    (num === "Rock" && robot === "Scissors") ||
    (num === "Paper" && robot === "Rock") ||
    (num === "Scissors" && robot === "Paper")
  ) {
    n = "Sən qalib gəldin! 🟢";
  } else {
    n = "Robot Qalib gəldi! 🔴";
  }

  return (
    <div>
      <h2>Birini seç:</h2>
      <div>
        <button onClick={() => setNum("Rock")}>Rock</button>
        <button onClick={() => setNum("Paper")}>Paper</button>
        <button onClick={() => setNum("Scissors")}>Scissors</button>
      </div>
      <h3>
        Robot ({robot}) seçdi. Sən ({num}) seçdin. {n}
      </h3>
    </div>
  );
}

export default App;