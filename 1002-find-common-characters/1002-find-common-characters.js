/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  let result = words[0].split("");

  for (let i = 1; i < words.length; i++) {
    let current = words[i].split("");
    result = result.filter(char => {
      let index = current.indexOf(char);
      if (index !== -1) {
        current.splice(index, 1); 
        return true;
      }
      return false;
    });
  }

  return result;
};
