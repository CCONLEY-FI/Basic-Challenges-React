import React, { useState } from 'react';
import EarthInput from './C6C1';
import AlienOutput from './C6C2';
import translatedWords from '../translated_words_dictionary.json'; // Import the translation data

export default function UniversalTranslator() {
    // State for storing the translated text and its phonetic representation
    const [translation, setTranslation] = useState('');
    const [phonetic, setPhonetic] = useState('');

    // Function to handle the translation of the phrase
    const handlePhrasePass = (phrase) => {
        // Split the phrase into individual words
        const words = phrase.toLowerCase().split(/\s+/);

        // Translate each word in the phrase
        const translatedPhrase = words.map(word => {
            // Find the translation for each word
            const found = translatedWords.find(item => item.word === word);
            // Return the translated word, or the original word if no translation is found
            return found ? found.translated : word;
        }).join(' '); // Join the translated words back into a phrase

        // Generate the phonetic representation for each word in the phrase
        const phoneticPhrase = words.map(word => {
            // Find the phonetic representation for each word
            const found = translatedWords.find(item => item.word === word);
            // Return the phonetic representation, or an empty string if not found
            return found ? found.phonetic : '';
        }).join(' '); // Join the phonetic representations back into a phrase

        // Update the state with the translated phrase and its phonetic representation
        setTranslation(translatedPhrase);
        setPhonetic(phoneticPhrase);
    };

    return (
        <div>
            <h3>Challenge 6</h3>
            {/* EarthInput component to take user input */}
            <EarthInput onPhraseSubmit={handlePhrasePass} />
            {/* AlienOutput component to display the translated text and its phonetic representation */}
            <AlienOutput alienPhrase={translation} phonetic={phonetic} />
        </div>
    );
}
