## 剑指 Offer 61. 扑克牌中的顺子

题意：只有大小王可以看成任意数字

解题核心：如果是顺子要满足以下两个条件

* 除大小王外没有重复数字
* 除大小王外，最大数-最小数<5

### 1. 排序

先排序，然后判断是否有重复，再获取最大最小数

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    // 排序
    nums.sort((a,b)=>a-b);
    let joker=0;
    for(let i=0;i<5;i++){
        if(nums[i]===0) joker++;
        // 判断是否有重复
        else if(nums[i]===nums[i+1]) return false;
    }
    // 最大数-最小数
    return nums[4]-nums[joker]<5?true:false;
};
```

时间复杂度：`O(nlogn)`

空间复杂度：O(1)

### 2. Set去重

遍历数组，遇到大小王跳过，判断Set中是否有该元素，若没有则加入，并更新记录最大最小值的变量

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let set= new Set();
    let max=-Infinity, min=Infinity;
    for(let i=0;i<5;i++){
        if(nums[i]!==0){
            if(set.has(nums[i])) return false;
            else{
                set.add(nums[i]);
                max=Math.max(max,nums[i]);
                min=Math.min(min,nums[i]);
            }
        }
    }
    return max-min<5?true:false;
};
```

时间复杂度：O(n)

空间复杂度：O(n)