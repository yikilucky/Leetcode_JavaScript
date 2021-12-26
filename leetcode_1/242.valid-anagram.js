/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    let nums=new Array(26).fill(0);//创建一个长度为m的全0数组
    const base="a".charCodeAt();
    for(const i of s){
        nums[i.charCodeAt()-base]++;
    }//遍历字符串，获取ASCII码
    for(const i of t){
        nums[i.charCodeAt()-base]--;
    }
    for(const i of nums){
        if(i!=0){
            return false;
        }
    }//遍历数组
    return true;
};
// @lc code=end

