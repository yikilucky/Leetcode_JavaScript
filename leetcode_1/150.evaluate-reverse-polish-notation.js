/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let i of tokens) {
        switch (i) {
            case "+":
                stack.push(stack.pop() + stack.pop());
                break;
            case "-":
                stack.push(-stack.pop() + stack.pop());
                break;
            case "*":
                stack.push(stack.pop() * stack.pop());
                break;
            case "/":
                const num1=stack.pop();
                const num2=stack.pop();
                stack.push(parseInt(num2/num1));
                break;
            default:
                stack.push(parseInt(i));
        }
    }
    return stack[0];
};
// @lc code=end

