/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let index=s.length-1;
    let result=0;
    for(let i=g.length-1;i>=0;i--){
        if(index<0) break;
        if(s[index]>=g[i]){
            index--;
            result++;
        }
    }
    return result;
};
// @lc code=end

