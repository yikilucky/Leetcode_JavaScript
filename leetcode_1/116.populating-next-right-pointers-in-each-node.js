/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let queue=[];
    if(root===null) return root;
    queue.push(root);
    while(queue.length!=0){
        const length=queue.length;
        for(let i=0;i<length;i++){
            const node=queue.shift();
            if(i<length-1) node.next=queue[0];
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
    }
    return root;
};
// @lc code=end

