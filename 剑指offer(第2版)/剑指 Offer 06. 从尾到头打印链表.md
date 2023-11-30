## 剑指 Offer 06. 从尾到头打印链表

### 用JavaScript中数组已有的方法`unshift()`

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
 * @return {number[]}
 */
var reversePrint = function(head) {
    let nums=[];
    if(head==null){
        return nums;
    }
    let cur=head;
    while(cur!=null){
        nums.unshift(cur.val);
        cur=cur.next;
    }
    return nums;

};
```

### 递归法(待施工)