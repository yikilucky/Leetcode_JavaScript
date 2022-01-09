/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function(root) {
    let sum=0;
    const getSum=root=>{
        if(!root) return;
        if(root.left&&!root.left.left&&!root.left.right) sum+=root.left.val;
        getSum(root.left);
        getSum(root.right);
    }
    getSum(root);
    return sum;
};
// @lc code=end

