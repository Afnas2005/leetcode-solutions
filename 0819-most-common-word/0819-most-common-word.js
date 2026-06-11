/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);

    const words = paragraph
        .toLowerCase()
        .replace(/[!?',;.]/g, " ")
        .split(/\s+/);

    const freq = {};
    let result = "";
    let maxCount = 0;

    for (const word of words) {
        if (word && !bannedSet.has(word)) {
            freq[word] = (freq[word] || 0) + 1;

            if (freq[word] > maxCount) {
                maxCount = freq[word];
                result = word;
            }
        }
    }

    return result;
};