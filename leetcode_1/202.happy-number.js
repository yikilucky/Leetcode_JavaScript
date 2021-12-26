/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var getsum=(n)=>{
        let sum=0;
        while(n){
            sum +=(n%10)**2;
            n=Math.floor(n/10);
        };
        return sum;
    }
    let sum=getsum(n);
    let arr=[];
    while(true){
        if(sum==1) return true;
        if(arr.includes(sum)) return false;
        arr.push(sum);
        sum=getsum(sum);
    }
};
// @lc code=end

