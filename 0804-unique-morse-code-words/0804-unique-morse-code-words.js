/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morseTable = [
    ".-","-...","-.-.","-..",".","..-.",
    "--.","....","..",".---","-.-",".-..",
    "--","-.","---",".--.","--.-",".-.",
    "...","-","..-","...-",".--","-..-",
    "-.--","--.."
  ];

  const seen = new Set();

  for (const word of words) {
    let code = "";
    for (const ch of word) {
      const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      code += morseTable[index];
    }
    seen.add(code);
  }

  return seen.size;
};
