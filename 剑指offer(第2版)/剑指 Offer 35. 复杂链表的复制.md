## 剑指 Offer 35. 复杂链表的复制

### 1. 哈希表

键是原节点，值是新节点

操作新节点，添加它们的next和random指针

```javascript
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head===null) return null;
    let map=new Map();
    let cur=head;
    // 初始化哈希表
    while(cur){
        map.set(cur,new Node(cur.val,null,null));
        cur=cur.next;
    }
    cur=head;
    // 操作新节点
    while(cur){
        let node=map.get(cur);
        node.next=map.get(cur.next)||null;
        node.random=map.get(cur.random);
        map.set(cur,node);
        cur=cur.next;
    }
    return map.get(head);
};
```

### 2. 拼接与拆分

拼接链表：原节点1-->新节点1-->原节点2-->新节点2...

构建新节点的random指向：当访问原节点`cur`的随机指向节点`cur.random`时，对应新节点`cur.next`的随机指向节点为 `cur.random.next`

拆分原 / 新链表：遍历执行`pre.next = pre.next.next` 和 `cur.next = cur.next.next`将两链表拆分开