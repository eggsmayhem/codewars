// LC 110
//
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balanced = true;
    
    function depth(node) {
        if (node === null) return 0;
        const left = node.left;
        const right = node.right;
        if (Math.abs(left - right) > 1) balanced = false;
        return 1 + Math.max(left, right);
    }
    depth(root);
    
    return balanced;
};
