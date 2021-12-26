/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res=[],queue=[];
    if(root===null) return res;
    queue.push(root);
    while(queue.length!==0){
        let length=queue.length;
        let curLevel=[];
        for(let i=0;i<length;i++){
            const node=queue.shift();
            curLevel.push(node.val);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        res.push(curLevel);
    }
    return res;
};
// @lc code=end

