## 剑指 Offer 47. 礼物的最大价值

### 1. 动态规划，二维数组

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    let dp=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    dp[0][0]=grid[0][0];
    for(let i=1;i<m;i++){
        dp[i][0]=dp[i-1][0]+grid[i][0];
    }
    for(let j=1;j<n;j++){
        dp[0][j]=dp[0][j-1]+grid[0][j];
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j]=grid[i][j]+Math.max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return dp[m-1][n-1];
};
```

时间复杂度：O(mn)

空间复杂度：O(mn)

### 2. 动态规划，滚动数组(一维数组)

`dp`数组长度等于grid的宽度

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    let dp=new Array(n).fill(0);
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            dp[j]=grid[i][j]+Math.max(dp[j],j>0?dp[j-1]:0);
        }
    }
    return dp[n-1];
};
```

时间复杂度：O(mn)

空间复杂度：O(n)

### 3. 动态规划，原地

直接把grid当成dp数组，在grid上改

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    for(let i=1;i<m;i++){
        grid[i][0]=grid[i-1][0]+grid[i][0];
    }
    for(let j=1;j<n;j++){
        grid[0][j]=grid[0][j-1]+grid[0][j];
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            grid[i][j]=grid[i][j]+Math.max(grid[i-1][j],grid[i][j-1]);
        }
    }
    return grid[m-1][n-1];
};
```

时间复杂度：O(mn)

空间复杂度：O(1)

