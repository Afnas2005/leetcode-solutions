/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let uniqueTypes = new Set(candyType).size;
    let canEat = candyType.length / 2;

    return Math.min(uniqueTypes, canEat);
};