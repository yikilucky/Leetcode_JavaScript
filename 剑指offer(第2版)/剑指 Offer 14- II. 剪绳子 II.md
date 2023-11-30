## 剑指 Offer 14- II. 剪绳子 II

这道题要考虑到**大数越界**的问题，如果用动态规划，因为要比较大小，所以没法直接取余，需要用上BigInt

### 贪心算法(循环取余)

用贪心需要用到数学结论

要使乘积最大，就要把绳子尽可能切成多个长度为3的片段，留下的最后一段绳子长度可能为0,1,2三种情况，若最后一段绳子长度为1，则应把一份3+1替换为2+2，因为2*2>3\*1

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if(n<4) return n-1;
    let res=1;
    while(n>4){
        n-=3;
        res=res*3%(1e9+7);
    }
    res=res*n%(1e9+7);
    return res;
};
```

