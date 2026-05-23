/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = [];

    function traverse(node) {
        if (node === null) return;

        result.push(node.val);

        for (let child of node.children) {
            traverse(child);
        }
    }

    traverse(root);

    return result;
};