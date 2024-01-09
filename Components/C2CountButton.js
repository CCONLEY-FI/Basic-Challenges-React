import React, { useState } from "react";
//#### Challenge 2: Stateful Counter Component

// *   **Objective**: Create a component with a button that increments a counter displayed on the screen.
// *   **Key Concepts**: State management with `useState`, handling events.

export default function CountButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>Challenge 2</h3>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
//done