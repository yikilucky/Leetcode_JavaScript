## 剑指 Offer 12. 矩阵中的路径

### 回溯(dfs+剪枝)

递归三部曲：

* 递归参数和返回值：参数包含当前矩阵元素在`board`中的索引`i`和`j`，当前目标字符在`word`中的索引`k`。返回值是true或者false
* 终止条件：把剪枝操作放在了终止条件里
  * 剪枝返回false：行或列索引越界；当前矩阵元素和目标字符不同；当前矩阵元素已访问过(后两者可以合并)
  * 返回true：当`k=word.length-1`，即字符串word全部匹配
* 递归逻辑：
  * 标记当前矩阵元素： 将 `board[i][j]`修改为空字符`''`，代表此元素已访问过，防止之后搜索时重复访问
  * 搜索下一单元格： 朝当前元素的 上、下、左、右 四个方向开启下层递归，使用`||`连接（表示只需找到一条可行路径就直接返回，不再做后续 DFS ），并记录结果至`res` 
  * 回溯：还原当前矩阵元素为初始值，初始值也是`word[k]`

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m=board.length;
    const n=board[0].length;
    // i,j 确定起始位置
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(dfs(board,word,i,j,0)) return true;
        }
    }
    return false;

    function dfs(board,word,i,j,k){
        if(i>=m||i<0||j>=n||j<0||board[i][j]!==word[k]) return false;
        if(k===word.length-1) return true;
        board[i][j]='';
        let res=dfs(board,word,i+1,j,k+1)||dfs(board,word,i-1,j,k+1)||dfs(board,word,i,j+1,k+1)||dfs(board,word,i,j-1,k+1);
        board[i][j]=word[k];
        return res;
    }
};
```

* 时间复杂度：O(MN*3^K^)：最差情况下，需要遍历矩阵中长度为K字符串的所有方案，时间复杂度为 O(3^K^)；矩阵中共有M\*N个起点，时间复杂度为O(MN)
  * 方案数计算： 设字符串长度为K，搜索中每个字符有上、下、左、右四个方向可以选择，舍弃回头（上个字符）的方向，剩下3种选择，因此方案数的复杂度为O(3^K^)。
* 空间复杂度：O(K)，递归深度不超过K





