/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left=right=add=0;
    let len=nums.length+1;
    for(right;right<nums.length;right++){
        add +=nums[right];
        while(add>=target){
            len =Math.min(len,right-left+1);
            add -=nums[left];
            left++;
        }
    }
    return len==nums.length+1?0:len;
};
// @lc code=end

