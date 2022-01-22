/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
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

var isValidBST = function (root) {
    let pre = null;
    const _isValidBST = root => {
        if (!root) return true;
        const left = _isValidBST(root.left);
        if (pre && root.val <= pre.val) return false;
        pre = root;
        const right = _isValidBST(root.right);
        return left && right;
    }
    return _isValidBST(root);

};
// @lc code=end

