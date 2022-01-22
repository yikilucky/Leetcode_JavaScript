/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let pre=null;
    let min=Infinity;
    const _getMinimumDifference=root=>{
        if(!root) return;
        _getMinimumDifference(root.left);
        if(pre) min=Math.min(min,root.val-pre.val);
        pre=root;
        _getMinimumDifference(root.right);
    }
    _getMinimumDifference(root);
    return min;
};
// @lc code=end

