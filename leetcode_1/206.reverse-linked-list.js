/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head||!head.next){return head;}
    let cur=head, pre=null;
    while(cur){
        temp=cur.next;
        cur.next=pre;
        pre=cur;
        cur=temp;
    }
    return pre;
};
//*双指针，最初cur指向head，pre指向null，然后要把cur.next先存储在临时指针pre里，再将cur.next指向pre
//!注意，当把一个Node对象赋值给一个变量后，它们就捆绑了，一个变另一个也变(因为栈内存中存储的是对象的地址)
//?20行代码有存在的必要吗，其实后面代码也囊括了(有的！会显得代码规范习惯和健硕性都不错！)
// @lc code=end

