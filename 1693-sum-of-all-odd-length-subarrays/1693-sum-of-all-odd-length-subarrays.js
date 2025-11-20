/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let len = 1; len <= arr.length - i; len += 2) {
            for (let j = i; j < i + len; j++) {
                total += arr[j];
            }
        }
    }

    return total;
};
