/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    let queue=[],depth=0;
    queue.push(root);
    while(queue.length){
        depth++;
        let length=queue.length;
        while(length--){
            const node=queue.shift();
            node.children&&queue.push(...node.children);
        }
    }
    return depth;
};
// @lc code=end

