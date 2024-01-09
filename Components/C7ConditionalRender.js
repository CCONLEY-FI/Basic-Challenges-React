import React, {useState} from 'react';
// Challenge 7: Conditional Rendering

// *   **Objective**: Display a component or message conditionally based on a state variable (e.g., show/hide a component with a button).
// *   **Key Concepts**: Conditional rendering, ternary operator, logical AND.

export default function ConditionalRender() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    return(
        <div>
            <h3>Challenge 7</h3>
            <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
            {show && <p>Displayed!</p>}
        </div>
    )
}