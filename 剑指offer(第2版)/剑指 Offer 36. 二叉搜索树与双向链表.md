## 剑指 Offer 36. 二叉搜索树与双向链表

### 递归+中序遍历

中间节点处理逻辑：

* 当 pre 为空时： 代表正在访问链表头节点，记为 head ；
* 当 pre 不为空时： 修改双向节点引用，即 pre.right = cur ， cur.left = pre ；
* 保存 cur：更新 pre = cur ，即节点 cur 是后继节点的 pre

```javascript
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    // 中序遍历
    function dfs(root){
        // 终止条件
        if(!root) return;
        dfs(root.left);
        // 中间节点处理逻辑
        if(pre!==null){
            pre.right=root;
            root.left=pre;
        }else{
            head=root;
        }
        pre=root;
        dfs(root.right);
    }

    if(root===null) return null;
    let head=null;
    let pre=null;
    dfs(root);
    head.left=pre;
    pre.right=head;
    return head;
};
```

