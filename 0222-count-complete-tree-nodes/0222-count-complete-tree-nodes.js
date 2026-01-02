/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
  if (!root) return 0;

  function leftHeight(node) {
    let h = 0;
    while (node) {
      h++;
      node = node.left;
    }
    return h;
  }

  function rightHeight(node) {
    let h = 0;
    while (node) {
      h++;
      node = node.right;
    }
    return h;
  }

  const lh = leftHeight(root);
  const rh = rightHeight(root);

  if (lh === rh) {
    return (1 << lh) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}
