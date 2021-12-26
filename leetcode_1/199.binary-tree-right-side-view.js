/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res=[],queue=[];
    if(root===null) return res;
    queue.push(root);
    while(queue.length!==0){
        const length=queue.length;
        const rightNode=queue[length-1];
        res.push(rightNode.val);
        for(let i=0;i<length;i++){
            const node=queue.shift();
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
    }
    return res;
};
// @lc code=end

