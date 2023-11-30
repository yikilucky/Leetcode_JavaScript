## 剑指 Offer 13. 机器人的运动范围

**网格DFS类题目**，相似的还有`200.岛屿数量`，`463.岛屿的周长`，`695.岛屿的最大面积`，`剑指offer12.矩阵中的路径`

可达解分析：自己取几个值画图看看，可发现，根据可达解的结构和联通性，机器人可以仅通过向右和向下就能访问所有可达解

### 1. DFS

递归三部曲：

* 递归参数：行列索引`i,j`以及两者的数位和`si,sj`。返回值是可达解个数
* 终止条件(包含剪枝)：1.行列越界；2.数位和超出目标值；3.当前元素已访问过；返回0
* 递归逻辑：标记当前单元格已访问过；向当前元素的向下，向右两方向元素递归

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let visited= new Array(m).fill(0).map(()=>new Array(n).fill(false));
    function dfs(i,j,si,sj){
        if(i>m-1||j>n-1||k<si+sj||visited[i][j]) return 0;
        visited[i][j]=true;
        return 1+dfs(i+1,j,(i+1)%10+Math.floor((i+1)/10),sj)+dfs(i,j+1,si,(j+1)%10+Math.floor((j+1)/10));
        // return 1+dfs(i+1,j,(i+1)%10?si-8:si+1,sj)+dfs(i,j+1,si,(j+1)%10?sj-8:sj+1);

    }
    return dfs(0,0,0,0);
};
```

在计算数位和的时候，有规律可循。由于每次只移动一格，所以只需计算数位和增量。可发现当出现进位时，数位和比上一个少8；否则是多1(写在注释的代码)

时间复杂度：`O(mn)`，最坏情况，遍历矩阵的所有单元格

空间复杂度：`O(mn)`，设置了是否访问过的数组

### 2.BFS

利用**队列**实现BFS。

**初始化**：将机器人初始点[0,0,0,0]加入队列 queue ；
**循环终止条件**：queue为空，代表已遍历完所有可达解。
**循环内部逻辑**：1. 将队首元素弹出，得到`i,j,si,sj` 2. 判断是否跳过：若① 行列索引越界 或② 数位和超出目标值 k 或③ 当前元素已访问过时，执行continue，跳过该元素 3.若没有跳过，则标记当前单元格已访问过，更新sum结果，并将下方和左方的单元格加入队列

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let queue=[];
    let sum=0;
    let visited= new Array(m).fill(0).map(()=>new Array(n).fill(false));
    queue.push([0,0,0,0]);
    while(queue.length){
        let [i,j,si,sj]=queue.shift();
        if(i>m-1||j>n-1||k<si+sj||visited[i][j]) continue;
        sum++;
        visited[i][j]=true;
        queue.push([i+1,j,(i+1)%10+Math.floor((i+1)/10),sj]);
        queue.push([i,j+1,si,(j+1)%10+Math.floor((j+1)/10)]);
    }
    return sum;
};
```

时间复杂度：`O(mn)`，最坏情况，遍历矩阵的所有单元格

空间复杂度：`O(mn)`，设置了是否访问过的数组