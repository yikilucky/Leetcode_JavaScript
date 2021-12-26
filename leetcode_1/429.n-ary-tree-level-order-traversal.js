/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res=[],queue=[];
    if(root===null) return res;
    queue.push(root);
    while(queue.length!==0){
        const length=queue.length;
        let curLevel=[];
        for(let i=0;i<length;i++){
            const node=queue.shift();
            curLevel.push(node.val);
            node.children&&queue.push(...node.children);
        }
        res.push(curLevel);
    }
    return res;
};
// @lc code=end

