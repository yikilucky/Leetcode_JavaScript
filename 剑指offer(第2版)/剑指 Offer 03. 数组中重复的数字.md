## 剑指 Offer 03. 数组中重复的数字

### 哈希表(数组或集合)

* 创建一个新数组
* 遍历原数组中的每个元素
  * 如果元素不在新数组中，则添加进去
  * 如果元素在新数组中，说明重复，返回该元素

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let newnums=[];
    for(const i of nums){
        if(newnums.includes(i)){
            return i;
        }else{
            newnums.push(i);
        }
    }
};
```

### 原地置换

思路：由于题目给了限制，一共n个元素，每个元素大小在[0,n-1]之间，那么把每个元素放到索引是它们自己的坑里，并且不再新创建数组，就在原数组中置换。从第一个元素开始遍历，如果`i!=nums[i]`，那么就把它放到索引是它自己的坑里，如果索引是它自己的坑里已经是它自己了，说明出现了重复。如果不是它自己，那么就交换一下，然后继续比较交换回来的元素是否等于索引，如果`i!=nums[i]`的话就再重复上述步骤，如果交换回来的元素等于索引了，那么就遍历下一个

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    for (let i in nums) {
        while (i != nums[i]) {
            if (nums[i] != nums[nums[i]]) {
                const temp = nums[nums[i]];
                nums[nums[i]] = nums[i];
                nums[i] = temp;
            }else{
                return nums[i];
            }

        }
    }
};
```

数组中两数交换也可以使用`[nums[nums[i]],nums[i]]=[nums[i],nums[nums[i]]];`语句