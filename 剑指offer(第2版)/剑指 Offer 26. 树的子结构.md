## 剑指 Offer 26. 树的子结构

### 先序遍历+深度优先搜索

* 函数`isSubStructure`先序遍历树A中的每个节点$n_{A}$;
* 函数`dfs`判断树A中以$n_{A}$为根节点的子树是否包含树B

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    // 若A与B其中一个为空,立即返回false
    if(!A||!B) return false;
    // B为A的子结构有3种情况,满足任意一种即可:
        // 1.B的起点为A,此时结果为recur(A,B)
        // 2.B的起点隐藏在A的左子树中,此时结果为isSubStructure(A.left, B)
        // 3.B的起点隐藏在A的右子树中,此时结果为isSubStructure(A.right, B)
    return dfs(A,B)||isSubStructure(A.left,B)||isSubStructure(A.right,B)

    function dfs(A,B){
        // 若B走完了,说明查找完毕,B为A的子结构
        if(!B) return true;
        // 若B不为空并且A为空或者A与B的值不相等,直接可以判断B不是A的子结构
        if(!A||A.val!==B.val) return false
        // 当A与B当前节点值相等,若要判断B为A的子结构
        // 还需要判断B的左子树是否为A左子树的子结构 && B的右子树是否为A右子树的子结构
        // 若两者都满足就说明B是A的子结构,并且该子结构以A根节点为起点
        return dfs(A.left,B.left)&&dfs(A.right,B.right);
    }
};
```

时间复杂度 O(MN) ： 其中 M,N 分别为树 A 和 树 B 的节点数量；先序遍历树 A 占用 O(M) ，每次调用 dfs(A, B) 判断占用 O(N) 。
空间复杂度 O(M) ： 当树 A 和树 B 都退化为链表时，递归调用深度最大。当 M≤N 时，遍历树 A 与递归判断的总递归深度为 M ；当 M>N 时，最差情况为遍历至树 A 叶子节点，此时总递归深度为 M。