## 剑指 Offer 25. 合并两个排序的链表

和`21.合并两个有序链表`一样

### 迭代

* 创建存储结果的新链表：伪头结点`dum`，节点`cur`指向`dum`
* 循环比较L~1~.val和L~2~.val
  * L~1~.val<L~2~.val: cur 的后继节点指定为L~1~，此后L~1~向前走一步
  * L~1~.val>L~2~.val: cur 的后继节点指定为L~2~，此后L~2~向前走一步
  * 节点cur向前走一步
* 合并剩余尾部：跳出时有两种情况，即L~1~为空或者L~2~为空，将非空的添加到节点`cur`之后
* 返回`dum.next`

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1==null || l2==null){
        return l1 !=null?l1:l2;
    }
    const dum=new ListNode(0);
    let cur=dum;
    while(l1!=null&&l2!=null){
        if(l1.val<=l2.val){
            cur.next=l1;
            l1=l1.next;
        }else{
            cur.next=l2;
            l2=l2.next;
        }
        cur=cur.next;
    }
    cur.next=l1!=null?l1:l2;
    return dum.next;
};
```

### 递归法(待施工)