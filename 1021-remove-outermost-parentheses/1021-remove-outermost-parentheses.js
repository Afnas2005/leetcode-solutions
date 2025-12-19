/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let balance = 0;

    for (let ch of s) {
        if (ch === '(') {
            if (balance > 0) result += ch;
            balance++;
        } else {
            balance--;
            if (balance > 0) result += ch;
        }
    }

    return result;
};
