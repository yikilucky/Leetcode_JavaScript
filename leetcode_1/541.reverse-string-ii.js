/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr=[...s];
    var rev=(left,right)=>{
        while(left++<right++){
            [arr[left],arr[right]]=[arr[right],arr[left]];
        }
    }
    // let arr=[...s];
    let a=Math.floor(arr.length/(2*k));
    let remain=arr.length%(2*k);
    for(let i=0;i<a;i++){
        rev(i*2*k,i*2*k+k-1);
    }
    if(remain>=k&&remain<2*k){
        rev(a*2*k,a*2*k+k-1);
    }else if(remain>0&&remain<k){
        rev(a*2*k,arr.length-1);
    }
    return arr.join('');
};
// @lc code=end

