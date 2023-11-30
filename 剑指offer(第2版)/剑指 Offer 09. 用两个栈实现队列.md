## 剑指 Offer 09. 用两个栈实现队列

类似`232.用栈实现队列`

一个输入栈，一个输出栈。删除元素的时候，先看输出栈是否为空，不为空就直接pop；若为空，则看输入栈是否为空，若不为空，则把输入栈的各个元素pop出来再一个个压入输出栈，然后再pop；若两个栈都为空则返回-1

```javascript
var CQueue = function() {
    this.stackin=[];
    this.stackout=[];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackin.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stackout.length) return this.stackout.pop();
    else if(this.stackin.length){
        while(this.stackin.length){
            this.stackout.push(this.stackin.pop());
        }
        return this.stackout.pop();
    }else return -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```

时间复杂度：插入：O(1)；删除：O(n)

空间复杂度：O(n)