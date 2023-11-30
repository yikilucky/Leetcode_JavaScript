## 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面

### 辅助数组

用JavaScript中数组已有的方法`unshift()`和`push()`，这也是我最初的写法

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let newnums=[];
    for(var i=0;i<nums.length;i++){
        if(nums[i] % 2){
            newnums.unshift(nums[i]);
        }else{
            newnums.push(nums[i]);
        }
    }
    return newnums;

};
```

### 首尾双指针

* 定义头指针left，尾指针right
* left一直往右移，直到它指向的值为偶数
* right一直往左移，直到它指向的值为奇数
* 交换nums[left]和nums[right]
* 重复上述操作，直到left>=right

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let left=0, right=nums.length-1;
    while(left<right){
        if((nums[left]%2==0)&&(nums[right]%2==1)){
            let a=nums[right];
            nums[right]=nums[left];
            nums[left]=a;
            left++;
            right--;
            continue;
        }
        if(nums[left]%2==1){
            left++;
        }
        if(nums[right]%2==0){
            right--;
        }
    }
    return nums;
};
```

### 快慢双指针

* 定义快慢双指针fast和low，fast在前，low在后
* fast的作用是向前搜索奇数位置，low的作用是指向下一个奇数应当存放的位置
* fast向前移动，当它搜索到奇数时，将它和nums[low]交换，此后low向前移动一个位置
* 重复上述操作，直到fast指向数组末尾

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let slow=0, fast=0;
    while(fast<nums.length){
        if(nums[fast]%2==1){
            let a=nums[fast];
            nums[fast]=nums[slow];
            nums[slow]=a;
            slow++;
        }
        fast++;
    }
    return nums;
};
```