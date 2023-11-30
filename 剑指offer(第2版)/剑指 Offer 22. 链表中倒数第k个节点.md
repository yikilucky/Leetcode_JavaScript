## 剑指 Offer 22. 链表中倒数第k个节点

### 差值法

* 先遍历链表，获得链表长度
* 从头结点开始走(n-k)步，即可找到链表倒数第k个节点

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let cur=head;
    let i=0;
    while(cur!=null){
        i+=1;
        cur=cur.next;
    }
    let m=i-k;
    for(let n=1;n<=m;n++){
        head=head.next;
    }
    return head;

};
```

### 双指针法



### 栈/队列法