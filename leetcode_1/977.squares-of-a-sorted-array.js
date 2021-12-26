/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0, right = nums.length - 1;
    let newNums = [];
    while (left <= right) {
        let a = nums[left] * nums[left];
        let b = nums[right] * nums[right];
        if (a >= b) {
            newNums.unshift(a);
            left++;

        } else {
            newNums.unshift(b);
            right--;
        }
    }
    return newNums;

};
// @lc code=end

