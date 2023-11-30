## 剑指 Offer 45. 把数组排成最小的数

这道题目本质是**排序**，核心在于两个数的大小要如何判断。在该题中不是判断两数的数值大小，而是**判断把两数根据不同顺序拼成一个数后的大小**。

比如两个数`x(3)`和`y(30)`，如果`xy(330)>yx(303)`，那么`y`就比`x`小

如何把两个数拼成一个数：可以先把数字转成字符串，然后再字符串拼串

`(x.toString()+b)-(y.toString()+a)` 这里还包含一些隐式转换，比如字符串和数字相加，会把数字自动转成字符串，然后再拼串；两个字符串相减会自动转换成数字再相减。

这里我直接用了JS的内置方法sort()，当然也可以用堆排，快排，归并排序等

```javascript
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort((a,b)=>(a.toString()+b)-(b.toString()+a));
    return nums.join('');
};
```

时间复杂度：`O(nlogn)`

空间复杂度：`O(1)`

