/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function(root) {
    if(!root) return 0;
    let queue=[],count=0;
    queue.push(root);
    while(queue.length){
        count++;
        const node=queue.shift();
        node.left&&queue.push(node.left);
        node.right&&queue.push(node.right);
    }
    return count;
};
// @lc code=end

