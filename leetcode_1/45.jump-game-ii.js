/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums===1) return 0;
    let curCover=0,nextCover=0,step=0;
    for(let i=0;i<nums.length-1;i++){
        nextCover=Math.max(i+nums[i],nextCover);
        if(i===curCover){
            step++;
            curCover=nextCover;
        }
    }
    return step;
};
// @lc code=end

