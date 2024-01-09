import React, { useState } from 'react';

// EarthInput component for taking user input and submitting it for translation
export default function EarthInput({ onPhraseSubmit }) {
    // State to store the current input phrase
    const [inputPhrase, setInputPhrase] = useState('');

    // Function to update the inputPhrase state when the user types in the input field
    const handleInputPhrase = (e) => {
        setInputPhrase(e.target.value);
    };

    // Function to handle the submission of the phrase
    const handleSubmit = () => {
        // Call the onPhraseSubmit function passed as a prop with the current inputPhrase
        onPhraseSubmit(inputPhrase);
        // Clear the input field after submission
        setInputPhrase('');
    };

    return (
        <div>
            {/* Text input for entering the phrase to be translated */}
            <input
                type="text"
                value={inputPhrase}
                onChange={handleInputPhrase}
                placeholder="Learn to speak alien!"
            />
            {/* Button to submit the phrase for translation */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}