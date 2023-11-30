## 剑指 Offer 43. 1～n 整数中 1 出现的次数

找规律题

将n分成三部分：高位+当前位+低位

根据当前位值的不同，有三种情况：

* 当前位的值为0时：此位 1 的出现次数只由高位 high 决定，计算公式为：`high×digit`
* 当前位的值为1时：此位 1 的出现次数由高位 high 和低位 low 决定，计算公式为：`high×digit+low+1`
* 当前位的值为2,3...9时：此位 1 的出现次数只由高位 high 决定，计算公式为：`(high+1)×digit`

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let res=0;
    let digit=1;
    let high=Math.floor(n/10), cur=n%10, low=0;
    while(!(high===0&&cur===0)){
        if(cur===0){
            res +=high*digit;
        }else if(cur===1){
            res +=high*digit+low+1;
        }else res +=(high+1)*digit;
        low +=cur*digit;
        cur=high%10;
        high=Math.floor(high/10);
        digit *=10;
    }
    return res;
};
```

时间复杂度：O(logn)，循环次数就是n的位数，是log~10~n

空间复杂度：O(1)