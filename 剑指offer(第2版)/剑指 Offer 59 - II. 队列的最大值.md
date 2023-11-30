## 剑指 Offer 59 - II. 队列的最大值

维护一个**普通队列**和一个放**最大值的队列**

入队时，将**最大值队列**列尾所有小于value的元素弹出(保持最大值队列从队头到队尾是非严格递减的)，再将value入队

出队时，除了普通队列首元素出队外，若最大值队列首元素和普通队列首元素相等，则最大值队列首元素也要出队

```javascript
var MaxQueue = function() {
    this.queue=[];
    this.max=[];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.max.length) return this.max[0];
    else return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value);
    while(value>this.max.at(-1)){
        this.max.pop();
    }
    this.max.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.queue.length){
        const front=this.queue.shift();
        if(this.max[0]===front){
            this.max.shift();
        }
        return front;
    }else return -1;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```

