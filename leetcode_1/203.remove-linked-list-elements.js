/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dum= new ListNode(0,head);
    let cur=dum;
    while(cur.next){
        if(cur.next.val==val){
            cur.next=cur.next.next;
            continue;
        }
        cur=cur.next;
    }
    return dum.next;
    
};
//!js已有的数据结构 ListNode，含属性val和属性next，分别对应该节点的值和下一个节点
// @lc code=end

