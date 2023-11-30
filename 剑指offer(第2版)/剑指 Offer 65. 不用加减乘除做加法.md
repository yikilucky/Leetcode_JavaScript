## 剑指 Offer 65. 不用加减乘除做加法

### 位运算

两个数a和b相加=无进位和n+进位c，由于题目不能用加号，所以把n看作a，c看作b再循环，直到进位为0，这样就不需要加号了，结果直接等于无进位和n。

**无进位和** 与 **异或运算** 规律相同；**进位** 和 **与运算** 规律相同，并需要**左移**一位

由于求进位的时候每次都左移，所以最终一定会左移到0

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    if(b===0) return a;
    return add(a^b,(a&b)<<1);
};
```

要注意<<的优先级高于&