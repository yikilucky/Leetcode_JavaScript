## 剑指 Offer 29. 顺时针打印矩阵

思路类似`59. 螺旋矩阵 II`

从最外层一圈圈往里遍历，要单独遍历最后只剩下一行或一列或一个元素的情况

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length||!matrix[0].length) return [];
    const m=matrix.length, n=matrix[0].length;
    let res=[];
    let xstart=0, ystart=0;
    let offset=1;
    let count=Math.floor(Math.min(m,n)/2);
    // 从最外层一圈圈往里遍历
    while(count){
        let i=xstart, j=ystart;
        for(;j<n-offset;j++) res.push(matrix[i][j]);
        for(;i<m-offset;i++) res.push(matrix[i][j]);
        for(;j>ystart;j--) res.push(matrix[i][j]);
        for(;i>xstart;i--) res.push(matrix[i][j]);
        count--;
        offset++;
        xstart++;
        ystart++;
    }
    // 单独遍历最后只剩下一行或一个元素的情况
    if(m<=n&&m%2){
        for(let j=ystart;j<=n-offset;j++) res.push(matrix[xstart][j]);
    }
    // 单独遍历最后只剩下一列的情况
    if(m>n&&n%2){
        for(let i=xstart;i<=m-offset;i++) res.push(matrix[i][ystart]);
    }
    return res;
};
```

