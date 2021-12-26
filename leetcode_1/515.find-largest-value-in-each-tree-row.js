/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
var largestValues = function(root) {
    let res=[],queue=[];
    if(root===null) return res;
    queue.push(root);
    while(queue.length!==0){
        const length=queue.length;
        let maxValue=queue[0].val;
        for(let i=0;i<length;i++){
            const node=queue.shift();
            maxValue=node.val>maxValue?node.val:maxValue;
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        res.push(maxValue);
    }
    return res;
};
// @lc code=end

