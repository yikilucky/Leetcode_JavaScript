/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newstr1=s.replace(/^\s+|\s+$/g,"");
    let newstr2=newstr1.replace(/\s{2,}/g," ");
    let arr=newstr2.split(' ');
    let left=0,right=arr.length-1;
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    return arr.join(' ');
};
// @lc code=end

