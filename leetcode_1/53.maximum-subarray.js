/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result=-Infinity;
    let count=0;
    for(let i=0;i<nums.length;i++){
        count+=nums[i];
        result=count>result?count:result;
        if(count<0) count=0;
    }
    return result;
};
// @lc code=end

