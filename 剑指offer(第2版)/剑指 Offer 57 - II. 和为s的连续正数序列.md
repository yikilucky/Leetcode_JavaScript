## 剑指 Offer 57 - II. 和为s的连续正数序列

### 1. 滑动窗口(双指针)

滑动窗口中的元素和sum，如果大于target，左边界右移；如果小于target，右边界右移；如果等于，记录结果，并右移左边界(也可以右移右边界)

循环条件可以是`i<=Math.floor(target/2)`，也可以是`j<=Math.floor(target/2)+1`，也可以是`i<j`

```javascript
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let res=[];
    let left=1, right=1, sum=1;
    while(left<=Math.floor(target/2)){
        if(sum<target){
            right++;
            sum +=right;
        }else if(sum>target){
            sum -=left;
            left++;
        }else{
            let arr=[];
            for(let i=left;i<=right;i++){
                arr.push(i);
            }
            res.push(arr);
            sum -=left;
            left++;
        }
    }
    return res;
};
```

时间复杂度：O(n)

空间复杂度：O(1)

### 2. 求根法

当确定`i`和`target`的情况下，根据求和公式求出`j`，当`j`是整数且大于`i`的时候记录结果

`i`需要枚举，最大只取到`Math.floor(target/2)`

这个时间复杂度虽然也是线性的，但会比第一种小一点