/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1==null || l2==null){
        return l1 !=null?l1:l2;
    }
    const dum=new ListNode(0,null);
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
// @lc code=end

