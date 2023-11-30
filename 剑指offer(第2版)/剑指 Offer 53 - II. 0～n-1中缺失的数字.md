##  剑指 Offer 53 - II. 0～n-1中缺失的数字

可以直接遍历，看每个下标处的元素是否和下标相等；也可以两和相减，差就是缺失的数字，但这些的时间复杂度都是O(n)

### 二分法

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let left=0,right=nums.length-1;
    while(left<right){
        let mid=Math.floor((left+right)/2);
        // 判断元素与索引的值是否一致, 一致说明缺失的数字在当前索引的右边
        if(nums[mid]===mid) left=mid+1;
        // 不一致，说明缺失的数字可能是当前索引对应的值或者在它的左边  
        else right=mid;  
    }
    // 当左边界与右边界相等时，可能已经指向该缺失的数字，但是还有一种可能是缺失的数字在数组之外，比如[0]缺少1
    return nums[left]===left?left+1:left;
};
```

要注意缺失的数字可能在数组之外，比如[0]缺少1，所以最终返回值要判断一下

时间复杂度：`O(logn)`

空间复杂度：O(1)