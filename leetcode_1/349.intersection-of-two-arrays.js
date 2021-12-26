/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const setnums1=new Set(nums1);
    let setnums=new Set();
    for(const i of nums2){
        if(setnums1.has(i)){
            setnums.add(i);
        }
    }
    return Array.from(setnums);
};
// @lc code=end

