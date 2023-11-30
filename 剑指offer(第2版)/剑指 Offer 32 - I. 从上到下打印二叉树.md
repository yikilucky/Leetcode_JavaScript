## 剑指 Offer 32 - I. 从上到下打印二叉树

### 层序遍历

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
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let res=[],queue=[];
    queue.push(root);
    while(queue.length){
        let node=queue.shift();
        res.push(node.val);
        node.left&&queue.push(node.left);
        node.right&&queue.push(node.right);
    }
    return res;
};
```

