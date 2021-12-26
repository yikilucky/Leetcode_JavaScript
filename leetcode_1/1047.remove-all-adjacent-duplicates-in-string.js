/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack=[];
    for(let i of s){
        if(stack[stack.length-1]!==i){
            stack.push(i);
        }else{
            stack.pop();
        }
    }
    return stack.join("");
};
// @lc code=end

