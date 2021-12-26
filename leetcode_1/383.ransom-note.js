/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr=new Array(26).fill(0);
    let base="a".charCodeAt();
    for(let i of magazine){
        arr[i.charCodeAt()-base]++;
    }
    for(let i of ransomNote){
        arr[i.charCodeAt()-base]--;
        if(arr[i.charCodeAt()-base]<0) return false;
    }
    return true;
};
// @lc code=end

