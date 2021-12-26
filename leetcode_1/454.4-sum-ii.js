/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map=new Map();
    for(let n1 of nums1){
        for(let n2 of nums2){
            let n12=n1+n2;
            map.set(n12,(map.get(n12)||0)+1);
        }
    }
    let count=0;
    for(let n3 of nums3){
        for(let n4 of nums4){
            count+=map.get(0-n3-n4)||0;
        }
    }
    return count;
};
// @lc code=end

