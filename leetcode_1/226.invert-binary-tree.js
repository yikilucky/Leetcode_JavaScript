/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(!root) return root;
    let queue=[];
    queue.push(root);
    while(queue.length){
        let length=queue.length;
        while(length--){
            let node=queue.shift();
            [node.left,node.right]=[node.right,node.left];
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
    }
    return root;
};
// @lc code=end

