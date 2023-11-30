## 剑指 Offer 54. 二叉搜索树的第k大节点

解题核心：二叉搜索树的中序遍历是递增序列

### 1. 借助数组保存中序遍历节点的值

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let res=[];
    function dfs(root){
        if(!root) return;
        dfs(root.left);
        res.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    return res[res.length-k];
};
```

时间复杂度：O(n)

空间复杂度：O(n)

### 2. 不借助数组，且用中序遍历的倒序

二叉搜索树的中序遍历的倒序是递减序列

每次k-1，直到k=0时保存结果并返回。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let res;
    function dfs(root){
        if(!root) return;
        dfs(root.right);
        if((--k)===0){
            res=root.val;
            return;
        }
        dfs(root.left);
    }
    dfs(root);
    return res;
};
```

时间复杂度 O(n)：当树退化为链表时(全部为右子节点)，无论k的值大小，递归深度都为n，占用O(n)时间
空间复杂度 O(n)：当树退化为链表时(全部为右子节点)，系统使用O(n)大小的栈空间

