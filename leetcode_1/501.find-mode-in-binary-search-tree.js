/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
var findMode = function (root) {
    let arr = [];
    const inorderTraversal = root => {
        if (!root) return;
        inorderTraversal(root.left);
        arr.push(root.val);
        inorderTraversal(root.right);
    }
    inorderTraversal(root);
    if(arr.length===1) return arr;
    let count = 1, maxFre = 1, result = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            if (count === maxFre) {
                result.push(arr[i - 1]);
                //!特别注意，当i是最后一个且maxFre=1的情况
                if(i===arr.length-1&&maxFre===1) result.push(arr[i]);
            }
            else if (count > maxFre) {
                maxFre = count;
                result = [];
                result.push(arr[i - 1]);
            }
            count = 1;
        } else if (arr[i] === arr[i - 1]) {
            count += 1;
            //!要注意i是最后一个的情况
            if(i===arr.length-1&&count === maxFre) result.push(arr[i]);
            else if(i===arr.length-1&&count > maxFre) {
                maxFre = count;
                result = [];
                result.push(arr[i]);
            }
        }
    }
    return result;
};
// @lc code=end

