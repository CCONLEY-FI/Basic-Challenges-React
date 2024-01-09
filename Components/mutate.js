const fs = require("fs");

const path = require("path");


// Set the path for the original and new dictionaries
const dictionaryPath = path.join(__dirname, "..", "words_dictionary.json");
const newDictionaryPath = path.join(
  __dirname,
  "..",
  "translated_words_dictionary.json"
);

// Map of alien characters to their phonetic sounds
const phoneticMap = {
  α: "ah", // Alpha
  ε: "eh", // Epsilon
  ι: "ee", // Iota
  ου: "oo", // Omicron-Upsilon
  β: "b", // Beta
  χ: "ch", // Chi
  δ: "d", // Delta
  φ: "f", // Phi
  γ: "g", // Gamma
  η: "ay", // Eta
  ϳ: "j", // Yot
  κ: "k", // Kappa
  λ: "l", // Lambda
  μ: "m", // Mu
  ν: "n", // Nu
  π: "p", // Pi
  ϱ: "r", // Rho
  σ: "s", // Sigma
  τ: "t", // Tau
  υ: "u", // Upsilon
  ω: "o", // Omega
  ψ: "ps", // Psi
  ζ: "z", // Zeta
};

// Function to convert an alien word to its phonetic representation
function toPhonetic(alienWord) {
  return alienWord
    .split("")
    .map((char) => phoneticMap[char] || char)
    .join("");
}

// Function to translate an Earth language word to an alien language word
function translateToAlienLanguage(earthText) {
  function isVowel(char) {
    return "aeiou".includes(char.toLowerCase());
  }
  // Function to generate a random alien vowel
  function alienVowel() {
    return "αειου".charAt(Math.floor(Math.random() * 5));
  }
  // Function to generate a random alien consonant
  function alienConsonant() {
    return "βχδφγηϳκλμνπϱστυωχψζ".charAt(Math.floor(Math.random() * 24));
  }

  // Function to transform an Earth language word to an alien language word
  function transformWord(word) {
    if (word.toLowerCase() === "bob") {
      return word; // Special case for "Bob"
    }

    let alienWord = "";
    let vowelCount = 0;
    let prevChar = "";

    for (const char of word) {
      if (isVowel(char)) {
        if (vowelCount < 2) {
          alienWord += alienVowel();
          vowelCount++;
        } else {
          alienWord += alienConsonant();
          vowelCount = 0;
        }
      } else {
        vowelCount = 0;
        if (prevChar === char) {
          // Probability of repeating consonants decreases with each repetition
          if (
            Math.random() <
            0.5 ** alienWord.split("").filter((c) => c === char).length
          ) {
            alienWord += char;
          } else {
            alienWord += alienConsonant();
          }
        } else {
          alienWord += alienConsonant();
        }
      }
      prevChar = char;
    }

    return alienWord;
  }

  return earthText.split(" ").map(transformWord).join(" ");
}

//below is commented out due to it being a react component and not a node.js file

// // Example usage in a React component
// class UniversalTranslator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { inputText: '', alienText: '' };
//     }

//     handleInputChange = (event) => {
//         this.setState({ inputText: event.target.value });
//     };

//     handleTranslate = () => {
//         this.setState({ alienText: translateToAlienLanguage(this.state.inputText) });
//     };

//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.state.inputText} onChange={this.handleInputChange} />
//                 <button onClick={this.handleTranslate}>Translate</button>
//                 <p>Alien Language: {this.state.alienText}</p>
//             </div>
//         );
//     }
// }

// // Example usage in a Node.js file
function processDictionary() {
  fs.readFile(dictionaryPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const words = JSON.parse(data);
    const translatedWords = Object.keys(words).map((word, index) => ({
      index: index,
      word: word,
      translated: translateToAlienLanguage(word),
      phonetic: toPhonetic(translateToAlienLanguage(word)),
    }));

    fs.writeFile(
      newDictionaryPath,
      JSON.stringify(translatedWords, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing the translated words file:", err);
        } else {
          console.log("Translated words dictionary created successfully.");
        }
      }
    );
  });
}

processDictionary();
