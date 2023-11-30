## 剑指 Offer 19. 正则表达式匹配

### 动态规划

[题解](https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof/solutions/494128/jian-zhi-offer-19-zheng-ze-biao-da-shi-pi-pei-dong/)

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let m=s.length, n=p.length;
    let dp=new Array(m+1).fill(0).map(()=>new Array(n+1).fill(false));
    // 初始化
    dp[0][0]=true;
    for(let j=2;j<=n;j+=2){
        if(p[j-1]==='*'){
            dp[0][j]=dp[0][j-2];
        }
    }
    // 递推公式
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(p[j-1]==='*'){
                dp[i][j]=dp[i][j-2]||((s[i-1]===p[j-2]||p[j-2]==='.')&&dp[i-1][j]);
            }else{
                dp[i][j]=(s[i-1]===p[j-1]||p[j-1]==='.')&&dp[i-1][j-1];
            }
        }
    }
    return dp[m][n];

};
```

