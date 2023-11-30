## 剑指 Offer 18. 删除链表的节点

### 单指针遍历

* 为了方便设置伪头结点dum，cur指向dum，用cur来遍历链表
* 当节点值和目标值相等时，删除该节点，并返回dum.next

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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let dum=new ListNode(0);
    dum.next=head;
    let cur=dum;
    while(cur.next!=null){
        if(cur.next.val===val){
            cur.next=cur.next.next;
            return dum.next;
        }
        cur=cur.next;
    }
    return dum.next;
};
```

### 递归法