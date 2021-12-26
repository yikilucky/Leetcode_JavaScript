/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
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
// @lc code=end

