## 剑指 Offer 31. 栈的压入、弹出序列

栈模拟类型的题

### 辅助栈

遍历数组`pushed`，将`pushed` 的每个元素依次入栈；每次将 pushed的元素入栈之后，如果栈不为空且栈顶元素与`popped`的当前元素相同，则将栈顶元素出栈，同时将`popped`的指针向后移一位，直到栈为空或栈顶元素与`popped`的当前元素不同。将`pushed`全都遍历完后，如果栈为空则返回true

```javascript
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let j = 0;
    for(let i=0;i<pushed.length;i++){
        stack.push(pushed[i]);
        while(stack.length&&stack[stack.length-1]===popped[j]){
            stack.pop();
            j++;
        }
    }
    return stack.length?false:true;
};
```

时间复杂度：O(n)，每个元素最多进栈出栈各一次

空间复杂度：O(n)

### 直接把`pushed`数组当成辅助栈

这种方法虽然不用额外的栈空间，但是会改变输入数组

```javascript
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let i=0, j = 0;
    for(let e of pushed){
        pushed[i]=e;
        while(i>=0&&pushed[i]===popped[j]){
            i--;
            j++;
        }
        i++;
    }
    return i===0;
};
```

时间复杂度：O(n)，每个元素最多进栈出栈各一次

空间复杂度：O(1)