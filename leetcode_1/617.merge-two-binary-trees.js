/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(!root1) return root2;
    if(!root2) return root1;
    let arr=[];
    arr.push(root1);
    arr.push(root2);
    while(arr.length){
        let nodeA=arr.shift();
        let nodeB=arr.shift();
        nodeA.val += nodeB.val;
        if(nodeA.left&&nodeB.left){
            arr.push(nodeA.left);
            arr.push(nodeB.left);
        }
        if(nodeA.right&&nodeB.right){
            arr.push(nodeA.right);
            arr.push(nodeB.right);
        }
        if(!nodeA.left&&nodeB.left)
        nodeA.left=nodeB.left;
        if(!nodeA.right&&nodeB.right)
        nodeA.right=nodeB.right;
    }
    return root1;
};
// @lc code=end

