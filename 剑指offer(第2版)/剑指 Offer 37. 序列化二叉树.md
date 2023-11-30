## 剑指 Offer 37. 序列化二叉树

### BFS

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root===null) return '[]';
    let queue=[]; // 队列存放节点
    let res=[]; // 结果数组存放val值或者'null'
    queue.push(root);
    while(queue.length){
        let node=queue.shift();
        res.push(node===null?'null':node.val);
        node&&queue.push(node.left);
        node&&queue.push(node.right);
    }
    return '['+res.join(',')+']';

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data==='[]') return null;
    let queue=[]; // 队列里存放节点值
    const vals=data.slice(1,data.length-1).split(','); // 把字符串转成数组
    let i=0;
    let root=new TreeNode(+vals[i]);
    queue.push(root);
    while(queue.length){
        let node=queue.shift();
        if(vals[++i]!=='null'){
            let leftnode=new TreeNode(+vals[i]);
            node.left=leftnode;
            queue.push(leftnode);
        }else node.left=null;
        if(vals[++i]!=='null'){
            let rightnode=new TreeNode(+vals[i]);
            node.right=rightnode;
            queue.push(rightnode);
        }else node.right=null;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```

