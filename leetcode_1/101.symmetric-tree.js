/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
    let queue=[];
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length){
        const leftNode=queue.shift();
        const rightNode=queue.shift();
        if(!leftNode&&!rightNode) continue;
        else if(leftNode==null&&rightNode!==null||leftNode!==null&&rightNode==null||leftNode.val!==rightNode.val) return false;
        queue.push(leftNode.left);
        queue.push(rightNode.right);
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    }
    return true;
};
// @lc code=end

