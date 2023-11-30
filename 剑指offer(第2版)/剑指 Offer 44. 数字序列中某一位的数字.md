## 剑指 Offer 44. 数字序列中某一位的数字

### 模拟找规律题

求解分为三步：

* 确定`n`所在数字的位数`digit`，也就是`n`在`digit`为几的区段里
* 确定`n`所在的数字，记为`num`
* 确定`n`是`num`中的哪一数位，并返回结果

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if(n<10) return n;
    let digit=1;
    // 求所在的位数
    while(n>9*10**(digit-1)*digit){
        n-=9*10**(digit-1)*digit;
        digit++;
    } 
    // 求所在的数字
    let num=10**(digit-1)+Math.floor((n-1)/digit);
    // 求数字中的具体数位
    let res=num.toString().charAt((n-1)%digit);
    return +res;
};
```

时间复杂度：O(log~10~n)， 求n对应数字所在的位数是O(log~10~n)，第一步最多循环O(log~10~n)次；第三步将数字转换为字符串也使用O(log~10~n)时间，最终总体为O(log~10~n)

空间复杂度：O(log~10~n)，将数组转换为字符串

另外要注意运算符优先级：**的优先级是高于加减乘除的；三目的运算符是低于加减乘除的
