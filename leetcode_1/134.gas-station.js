/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    /* let totalGas=gas.reduce((prev,curr)=>prev+curr);
    let totalCost=cost.reduce((prev,curr)=>prev+curr);
    if(totalCost>totalGas) return -1; */
    let remain=0,total=0,start=0;
    for(let i=0;i<gas.length;i++){
        remain+=(gas[i]-cost[i]);
        total+=(gas[i]-cost[i]);
        if(remain<0){
            start=i+1;
            remain=0;
        }
    }
    if(total<0) return -1;
    return start;
};
// @lc code=end

