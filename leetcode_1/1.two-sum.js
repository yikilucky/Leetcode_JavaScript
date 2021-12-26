/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map=new Map();
    for(let i in nums){
        if(map.get(target-nums[i])!=undefined){
            return [i,map.get(target-nums[i])]
        }
        map.set(nums[i],i);
    }
    return [];
};
// @lc code=end

