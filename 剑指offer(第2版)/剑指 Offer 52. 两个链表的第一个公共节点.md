## 剑指 Offer 52. 两个链表的第一个公共节点

和`160.相交链表`一样

### 双指针法

* 用`nodeA`，`nodeB`分别指向两个链表`headA`，`headB`的头结点
* 同时逐节点遍历，当`node1`到达链表 `headA` 的末尾时，重新定位到链表 `headB` 的头节点；当 `node2` 到达链表 `headB` 的末尾时，重新定位到链表 `headA` 的头节点
* 当它们相遇时，所指向的节点就是第一个公共节点

详细解析：<https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/solution/jian-zhi-offer-52-liang-ge-lian-biao-de-gcruu/>

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA==null||headB==null){
        return null;
    }
    let nodeA=headA, nodeB=headB;
    while(nodeA!=nodeB){
        nodeA=nodeA==null?headB:nodeA.next;
        nodeB=nodeB==null?headA:nodeB.next;
    }
    return nodeA; 
};
```