/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth = function(root) {
    if(root===null) return 0;
    let queue=[],depth=0;
    queue.push(root);
    while(queue.length!=0){
        depth+=1;
        const length=queue.length;
        for(let i=0;i<length;i++){
            const node=queue.shift();
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
    }
    return depth;
};
// @lc code=end

