## 剑指 Offer 57. 和为s的两个数字

### 1. 哈希法

用哈希集合，在集合中搜索是否存在某个元素的时间复杂度是O(1)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let set= new Set(nums);
    for(let i=0;i<nums.length;i++){
        if(set.has(target-nums[i])) return [nums[i],target-nums[i]];
    }
};
```

时间复杂度和空间复杂度都为O(n)

### 2. 双指针

双指针left, right分别指向数组的左右两端

和为`nums[i]+nums[j]`，若和大于target，right指针向左移；若和小于target，left指针向右移；若等于则返回数组

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left=0, right=nums.length-1;
    while(left<right){
        if(nums[left]+nums[right]===target) return [nums[left],nums[right]];
        else if(nums[left]+nums[right]>target) right--;
        else left++;
    }
};
```

时间复杂度：O(n)

空间复杂度：O(1)