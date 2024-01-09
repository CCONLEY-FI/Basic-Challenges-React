import React, { useState } from "react";
import Magic8BallDisplay from "./Magic8BallDisplay";
// Challenge 5: Component Props and Data Flow

// *   **Objective**: Create a parent component that passes data to a child component via props. The child component should display this data.
// *   **Key Concepts**: Props, component hierarchy.

export default function Magic8BallApp() {
  let chances = [
    "yes",
    "no",
    "fine",
    "no way",
    "Hell No",
    "you win",
    "signs point to yes",
    "you got it right",
  ];
  const [activeAns, setActiveAns] = useState("");

  const randomAns = () => {
    const len = chances.length;
    setActiveAns(chances[Math.floor(Math.random() * len)]);
  };

  return (
    <div>
      <h3>Challenge 5</h3>
      <button
        type="text"
        style={{ textAlign: "center" }}
        onClick={randomAns}
        aria-label="Ask the Magic Ball, Bruh!"
      >Ask the Magic 8 Ball</button>
      <Magic8BallDisplay answer={activeAns} />
    </div>
  );
}
