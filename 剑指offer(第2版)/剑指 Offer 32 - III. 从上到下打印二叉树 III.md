## 剑指 Offer 32 - III. 从上到下打印二叉树 III

### 方法一：层序遍历+双端队列(标志位判断奇偶层)

`temp`是要添加到结果数组中的数组。如果是奇数层，则把`node.val`添加到`temp`尾部；如果是偶数层，则把`node.val`添加到`temp`头部

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue=[], res=[];
    let flag=1;
    queue.push(root);
    while(queue.length){
        let temp=[];
        let length=queue.length;
        while(length--){
            let node=queue.shift();
            if(flag===1) temp.push(node.val);
            else temp.unshift(node.val);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        flag=-flag;
        res.push(temp);
    }
    return res;
};
```

时间复杂度：O(n)

空间复杂度：O(n)

### 方法二：层序遍历+双端队列(不需要判断奇偶层)

方法一对每个节点都要进行标志位判断，也就是增加了N次判断

在外层大循环中，每次处理两层。第一层是奇数层，第二层就是偶数层，两层间要判断一下是否还有下一层

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue=[], res=[];
    queue.push(root);
    while(queue.length){
        // 处理奇数层
        let temp=[];
        let length=queue.length;
        while(length--){
            let node=queue.shift();
            temp.push(node.val);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        res.push(temp);
        // 判断queue是否为空，即是否还有下一层
        if(!queue.length) return res;
        // 处理偶数层
        temp=[];
        length=queue.length;
        while(length--){
            let node=queue.shift();
            temp.unshift(node.val);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        res.push(temp);
    }
    return res;
};
```

时间复杂度：O(n)

空间复杂度：O(n)