// LC 235
//
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const value = root.val;
    if ((p.val >= value && q.val <= value) || (p.val <= value && q.val >= value)) return root
    
    if (p.val > value && q.val > value) return lowestCommonAncestor(root.right, p, q)
    
    else return lowestCommonAncestor(root.left, p, q)
    
};
