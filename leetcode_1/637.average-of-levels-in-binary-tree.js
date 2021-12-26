/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
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
var averageOfLevels = function(root) {
    let res=[],queue=[];
    queue.push(root);
    while(queue.length!=0){
        const length=queue.length;
        let sum=0;
        for(let i=0;i<length;i++){
            const node=queue.shift();
            sum+=node.val;
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        let arr=sum/length;
        res.push(arr);
    }
    return res;
};
// @lc code=end

