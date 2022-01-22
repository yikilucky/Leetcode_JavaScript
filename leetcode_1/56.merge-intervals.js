/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length===1) return intervals;
    for(let i=0;i<intervals.length-1;i++){
        let index=i+1;
        while(index<intervals.length){
            if(intervals[i][1]>=intervals[index][0]&&intervals[i][0]<=intervals[index][1]){
                intervals[index]=[Math.min(intervals[i][0],intervals[index][0]),Math.max(intervals[i][1],intervals[index][1])];
                intervals.splice(i,1);
                i--;
                break;
            }
            index++;
        }
    }
    return intervals;
};
// @lc code=end

