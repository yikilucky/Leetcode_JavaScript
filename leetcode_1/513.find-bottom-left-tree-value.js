/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
 */

// @lc code=start
/**
 * Definition for node binary tree node.
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
var findBottomLeftValue = function(root) {
    let arr=[],leftNode;
    arr.push(root);
    while(arr.length!==0){
        let length=arr.length;
        for(let i=0;i<length;i++){
            const node=arr.shift();
            if(i==0) leftNode=node.val;
            node.left&&arr.push(node.left);
            node.right&&arr.push(node.right);
        }
    }
    return leftNode;
    /* let arr=[],res=[];
    arr.push(root);
    while(arr.length){
        let length=arr.length;
        let tem=[];
        while(length--){
            const node=arr.shift();
            tem.push(node);
            node.left&&arr.push(node.left);
            node.right&&arr.push(node.right);
        }
        res.push(tem);
    }
    return res.pop().shift().val; */
};
// @lc code=end

