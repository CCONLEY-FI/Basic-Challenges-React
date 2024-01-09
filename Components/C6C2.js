import React from 'react';

// AlienOutput component to display the translated alien phrase and its phonetic representation
const AlienOutput = ({ alienPhrase, phonetic }) => {
    return (
        <div>
            {/* Display the translated alien phrase */}
            <p>Translated: {alienPhrase}</p>
            {/* Display the phonetic representation of the alien phrase */}
            <p>Phonetic: {phonetic}</p>
        </div>
    );
};

export default AlienOutput;
