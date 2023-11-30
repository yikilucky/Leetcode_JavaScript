## 剑指 Offer 11. 旋转数组的最小数字

lc第154题，和第153题的区别是该题有重复元素

### 二分法

将中间元素和区间最后一个元素相比(其实也可以将中间元素和区间第一个元素相比找最大值，最小值就是最大值的后一个，但要考虑最大值是最后一个值的特殊情况)：

* 当 `中间元素>区间最后一个元素` 时：最小值一定在右区间`[mid+1, j]` 内，因此执行 `i=mid+1`；
* 当 `中间元素<区间最后一个元素` 时：最小值一定在左区间`[i, mid]` 内，因此执行 `j=mid`；
* 当 `中间元素=区间最后一个元素` 时：无法判断最小值在左区间还是右区间，可执行`j--`缩小判断范围

`j--`能保证缩小区间的安全性：因为两数相等，所以就算把区间最后一个值删除了，依然能在前面找到和删除的值相等的元素

```javascript
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let left=0, right=numbers.length-1;
    while(left<right){
        mid=Math.floor((left+right)/2)
        if(numbers[mid]<numbers[right]) right=mid;
        else if(numbers[mid]>numbers[right]) left=mid+1;
        else right--;
    }
    return numbers[left];
};
```

时间复杂度：`O(logn)`，但当整个数组都是同一个数时是最坏时间复杂度O(n)

空间复杂度：O(1)