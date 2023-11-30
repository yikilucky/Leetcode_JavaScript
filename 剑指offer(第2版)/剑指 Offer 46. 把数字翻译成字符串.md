## 剑指 Offer 46. 把数字翻译成字符串

原理：青蛙跳台阶，可跳一阶也可跳两阶，但跳两阶是有条件限制的，问跳到第N个台阶有几种方法

### 动态规划

`dp[n]` 表示 包括第n个数之前的数字有多少种不同的翻译方法

初始化：`dp[0]=1, dp[1]=1;`

状态转移方程：`dp[i]=dp[i-1]+dp[i-2]`(条件：两位数要在[10,25]之间) 或者`dp[i]=dp[i-1]`

#### 方法一：用`dp`数组+把`num`转成字符串

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let numString=num+''; //把数字转成字符串
    if(numString.length===1) return 1;
    let dp=[];
    dp[0]=1, dp[1]=1;
    for(let i=2;i<=numString.length;i++){
        if(numString[i-2]+numString[i-1]>25||numString[i-2]+numString[i-1]<10){
            dp[i]=dp[i-1];
        }else{
            dp[i]=dp[i-1]+dp[i-2];
        }
    }
    return dp[numString.length];

};
```

时间复杂度：O(n)，n是给定数字的位数

空间复杂度：O(n), `dp`数组和生成的字符串长度都为n

#### 方法二：用滚动数组思想+把`num`转成字符串

由于当前状态之和前两项的状态有关，所以可以用常数变量来代替数组表示

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let numString=num+''; 
    if(numString.length===1) return 1;
    let pre0=1, pre1=1, cur=0;
    for(let i=2;i<=numString.length;i++){
        if(numString[i-2]+numString[i-1]>25||numString[i-2]+numString[i-1]<10){
            cur=pre1;
        }else{
            cur=pre1+pre0;
        }
        pre0=pre1;
        pre1=cur;
    }
    return cur;
};
```

时间复杂度：O(n)，n是给定数字的位数

空间复杂度：O(n), 生成的字符串长度为n

#### 方法三：不用字符串，用整除和取余获得每位的值

对数字`从左往右遍历`和`从右往左遍历`得到的结果都是一样的

我们可以`从右往左遍历`，获得每位的值

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    if(num<10) return 1;
    let pre0=1, pre1=1, cur=0;
    let x=num%10;
    num=Math.floor(num/10);
    while(num){
        let y= num%10;
        num=Math.floor(num/10);
        if(10*y+x>25||10*y+x<10) cur=pre1;
        else cur=pre1+pre0;
        pre0=pre1;
        pre1=cur;
        x=y;
    }
    return cur;
};
```

时间复杂度：O(n)，n是给定数字的位数

空间复杂度：O(1)