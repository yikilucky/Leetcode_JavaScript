## 剑指 Offer 15. 二进制中1的个数

类似`461.汉明距离`

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res=0;
    while(n){
        n&=n-1;
        res++;
    }
    return res;
};
```

