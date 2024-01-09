/* this was my first take on trying to fill out a dictionary with words and their phonetic translations 
through manual confirmation of validity... obviously this is not the way to go about it, but I wanted to keep it for posterity
*/


// const fs = require("fs");
// const readline = require("readline");
// const path = require("path");
// const bigrams = [
//   "th",
//   "he",
//   "in",
//   "er",
//   "an",
//   "re",
//   "ed",
//   "on",
//   "es",
//   "st",
//   "en",
//   "at",
//   "to",
//   "nt",
//   "ha",
//   "nd",
//   "ou",
//   "ea",
//   "ng",
//   "as",
//   "or",
//   "ti",
//   "is",
//   "et",
//   "it",
//   "ar",
//   "te",
//   "se",
//   "hi",
//   "of",
// ];
// const trigrams = [
//   "the",
//   "and",
//   "tha",
//   "ent",
//   "ing",
//   "ion",
//   "tio",
//   "for",
//   "nde",
//   "has",
//   "nce",
//   "edt",
//   "tis",
//   "oft",
//   "sth",
//   "men",
// ];

// const dbPath = path.join(__dirname, "db.json"); // Path to your db.json file

// const charFrequencies = {
//   E: 0.11,
//   M: 0.03,
//   A: 0.08,
//   H: 0.03,
//   R: 0.07,
//   G: 0.02,
//   I: 0.07,
//   B: 0.02,
//   O: 0.07,
//   F: 0.01,
//   T: 0.06,
//   Y: 0.01,
//   N: 0.06,
//   W: 0.01,
//   S: 0.05,
//   K: 0.01,
//   L: 0.05,
//   V: 0.01,
//   C: 0.04,
//   X: 0.001,
//   U: 0.03,
//   Z: 0.002,
//   D: 0.03,
//   J: 0.007,
//   P: 0.03,
//   Q: 0.002,
// };

// function isVowel(char) {
//   return "AEIOU".includes(char.toUpperCase());
// }

// function getRandomWordLength() {
//   const rand = Math.random();
//   if (rand < 0.5) return Math.floor(Math.random() * 5) + 3;
//   if (rand < 0.75) return Math.floor(Math.random() * 2) + 1;
//   if (rand < 0.98) return Math.floor(Math.random() * 5) + 8;
//   return Math.floor(Math.random() * 6) + 13;
// }

// function getRandomChar(vowelCount, totalVowels) {
//   let total = Object.values(charFrequencies).reduce((acc, cur) => acc + cur, 0);
//   let adjustedTotal = total - vowelCount * (total / totalVowels); // Depreciate vowel frequency
//   let rand = Math.random() * adjustedTotal;

//   const chars = Object.keys(charFrequencies);
//   while (true) {
//     for (let char of chars) {
//       if (isVowel(char) && vowelCount > 0) {
//         continue; // Skip vowel if vowel count is high
//       }
//       if (rand < charFrequencies[char]) {
//         return char;
//       }
//       rand -= charFrequencies[char];
//     }
//   }
// }

// function generateRandomString() {
//   let length = getRandomWordLength();
//   let randomString = "";
//   let useBigram = Math.random() < 0.5; // 50% chance to use a bigram/trigram
//   let vowelCount = 0;
//   let totalVowels = Object.keys(charFrequencies).filter((char) =>
//     isVowel(char)
//   ).length;

//   while (randomString.length < length) {
//     let nextChunk;
//     if (useBigram && randomString.length <= length - 2) {
//       nextChunk = bigrams[Math.floor(Math.random() * bigrams.length)];
//     } else if (!useBigram && randomString.length <= length - 3) {
//       nextChunk = trigrams[Math.floor(Math.random() * trigrams.length)];
//     } else {
//       nextChunk = getRandomChar(vowelCount, totalVowels);
//       if (isVowel(nextChunk)) {
//         vowelCount++;
//       }
//     }

//     if (randomString.length + nextChunk.length > length) {
//       break; // Prevent exceeding the target length
//     }

//     randomString += nextChunk;
//     useBigram = !useBigram; // Alternate between using bigrams and trigrams
//   }

//   return randomString.substring(0, length).toLowerCase();
// }

// function readDb() {
//   return JSON.parse(fs.readFileSync(dbPath, "utf8"));
// }

// function writeDb(data) {
//   fs.writeFileSync(dbPath, JSON.stringify(data, null, 4), "utf8");
// }

// function categorizeString() {
//   const db = readDb();
//   let randomString = generateRandomString();

//   while (
//     db.validWords.includes(randomString) ||
//     db.invalidWords.includes(randomString)
//   ) {
//     randomString = generateRandomString();
//   }

//   process.stdin.setRawMode(true);
//   process.stdin.resume();
//   process.stdout.write(`Is "${randomString}" a valid word? (y/n): `);

//   process.stdin.once("data", (data) => {
//     process.stdin.setRawMode(false);

//     const answer = data.toString().trim().toLowerCase();
//     if (answer === "y") {
//       db.validWords.push(randomString);
//     } else if (answer === "n") {
//       db.invalidWords.push(randomString);
//     }

//     writeDb(db);

//     // Automatically rerun the categorization
//     categorizeString();
//   });
// }

// categorizeString();
