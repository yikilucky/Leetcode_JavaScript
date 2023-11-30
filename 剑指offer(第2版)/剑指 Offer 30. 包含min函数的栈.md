## 剑指 Offer 30. 包含min函数的栈

### 1. 辅助栈

辅助栈中加入非严格递减元素，辅助栈的栈顶元素就是栈中的最小元素

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack=[];
    this.minStack=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(!this.minStack.length||this.minStack.at(-1)>=x) this.minStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.minStack.at(-1)===this.stack.pop()) this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack.at(-1);
};
```

### 2. 不用辅助栈：键值对

用常量变量表示最小值，栈中存入键值对，键值对包含`当前加入的值`以及`加入该值之前的最小值`

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.minNum = Infinity
    this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push({value: x, minNum: this.minNum})
    this.minNum = Math.min(this.minNum, x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const obj = this.stack.pop()
    this.minNum = obj.minNum
    return obj.value
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.at(-1).value
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minNum
};
```

### 3. 不用辅助栈：差值法

栈中存入的是`当前元素和存入当前元素前最小值的差`，如果差小于等于0，就更新最小值

出栈时，若栈顶元素小于等于0，则实际值为最小值，出栈后最小值更新为`当前最小值-栈顶元素`；否则，实际值为`当前最小值+栈顶元素`，最小值不变

==懒得再写一遍，待施工==