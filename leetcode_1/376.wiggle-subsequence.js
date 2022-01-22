/*
 * @lc app=leetcode id=376 lang=javascript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(nums.length===1) return 1;
    let preDiff=0,curDiff=0,result=1;
    for(let i=0;i<nums.length-1;i++){
        curDiff=nums[i+1]-nums[i];
        if(curDiff>0&&preDiff<=0||curDiff<0&&preDiff>=0){
            result++;
            preDiff=curDiff;
        }
    }
    return result;
};
// @lc code=end

