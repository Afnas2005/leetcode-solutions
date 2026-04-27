/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
    function build(left, right) {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);

        return {
            val: nums[mid],
            left: build(left, mid - 1),
            right: build(mid + 1, right)
        };
    }

    return build(0, nums.length - 1);
}