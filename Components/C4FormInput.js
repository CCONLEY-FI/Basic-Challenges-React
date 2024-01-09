import React, {useState} from 'react';
// Challenge 4: Controlled Form Component

// *   **Objective**: Build a form with an input field and a submit button. On submission, display the input value below the form.
// *   **Key Concepts**: Controlled components, form handling.

export default function InputForm() {
    const [input, setInput] = useState('');
    const [val, subVal] = useState('');

    const handleChangeValue = (event) => {
        setInput((event.target.value))
    };

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent the default form submit action
        subVal(input);  // Set the submitted value to be displayed
        setInput('');  // Optionally clear the input field after submit
    };

    return(
        <div>
            <h3>Challenge 4</h3>
            <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={input}
            onChange={handleChangeValue}
            placeholder="What should we submit?"
            />
            <button type="submit">Submit</button>
            </form>
            {val && <p>Submitted Value: {val}</p>}
        </div>
    )
}

//done