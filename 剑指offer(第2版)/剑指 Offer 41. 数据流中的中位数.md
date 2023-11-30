## 剑指 Offer 41. 数据流中的中位数

### 1. 二分插入

通过二分查找找到合适位置插入，使数组始终保持有序

```javascript
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.nums=new Array();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let length=this.nums.length;
    let left=0;
    let right=length-1;
    while(left<=right){
        let mid=right+left>>1;
        if(this.nums[mid]===num){
            this.nums.splice(mid,0,num);
            return;
        }else if(this.nums[mid]>num){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    this.nums.splice(right+1,0,num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let length=this.nums.length;
    let mid=length>>1;
    if(length%2) return this.nums[mid];
    else return (this.nums[mid-1]+this.nums[mid])/2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```

### 2. 堆排序

* 使用两个堆，来存储数据流

* 使用最小堆min保存较大的一半，最大堆max保存较小的一半

* 若总长度N为奇数，则最小堆个数为(N+1)/2，最大堆个数为(N-1)/2

* 若总长度N为偶数，则最小堆个数为N/2，最大堆个数为N/2

* 插入操作：当N为偶数，需要向最小堆添加一个元素，先将num插入最大堆，再将最大堆堆顶弹出，插入最小值

* 插入操作：当N为奇数，需要向最大堆添加一个元素，先将num插入最小堆，再将最小堆堆顶弹出，插入最大堆

* 中位数：可以由最小堆和最大堆的堆顶元素得到，若N为奇数，中位数=最小堆的堆顶；若N为偶数，则中位数=(最小堆的堆顶+最大堆的堆顶)/2

但是JS的堆是要自己手动构建，所以更麻烦