/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    const obj={
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(let i of s){
        if(i in obj){
            stack.push(obj[i]);
        }else if(stack.length==0||stack.pop()!==i){
            return false;
        }
    }
    return !stack.length;
};
// @lc code=end

