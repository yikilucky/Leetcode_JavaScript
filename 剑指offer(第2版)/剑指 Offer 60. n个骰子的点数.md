## 剑指 Offer 60. n个骰子的点数

### 动态规划

`dp[i][j]`表示`i`个骰子的点数和为`j`的概率

可以通过`i-1`个骰子的点数和来求`i`个骰子的点数和：`把i-1个骰子的点数和+(1~6)=i个骰子的点数和`

再把二维数组优化成两个一维数组，一个表示n个骰子所能掷出的点数和的概率数组`dp`，另一个是临时数组

```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function(n) {
    // 初始化dp数组：当只有一个骰子的时候
    let dp= new Array(6).fill(1/6);
    for(let i=2;i<=n;i++){
        // 创建临时数组
        let temp=new Array(5*i+1).fill(0);
        for(let j=0;j<dp.length;j++){
            for(let z=1;z<=6;z++){
                temp[j+z-1] +=dp[j]/6;
            }
        }
        // 更新dp数组
        dp=temp;
    }
    return dp;
};
```

