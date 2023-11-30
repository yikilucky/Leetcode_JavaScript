## 剑指 Offer 49. 丑数

### 动态规划

由于丑数只包含质因子2,3,5，那么大丑数一定是由小丑数质因子得到

`dp[i]`代表第`i`个丑数

递推公式：$dp[n]=min(x_{a}*2,x_{b}*3,x_{c}*5)$，索引a,b,c不确定，但它们一开始都指向首个丑数，也就是`dp[1]`

在每轮计算`dp[i]`后，需要更新索引a,b,c：**分别独立判断**`dp[i]`是否和$x_{a}*2,x_{b}*3,x_{c}*5$相等，若相等，对应索引+1(分别独立判断原因：比如12就可以由6*2和4\*3两种方式得到)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp=new Array(n+1).fill(0);
    dp[1]=1;
    let a=1,b=1,c=1;
    for(let i=2;i<=n;i++){
        dp[i]=Math.min(dp[a]*2,dp[b]*3,dp[c]*5);
        if(dp[i]===dp[a]*2) a++;
        if(dp[i]===dp[b]*3) b++;
        if(dp[i]===dp[c]*5) c++;
    }
    return dp[n];

};
```

时间复杂度：O(n)

空间复杂度：O(n)

### 最小堆

* 起始先将最小丑数 1 放入队列
* 每次从队列取出最小值 x，然后将 x 所对应的丑数 2x、3x 和 5x 进行入队。
* 对步骤 2 循环多次，第 n 次出队的值即是答案。

为了防止同一丑数多次进队，我们需要使用数据结构 Set 来记录入过队列的丑数。

时间复杂度：`O(nlogn)`

空间复杂度：O(n)