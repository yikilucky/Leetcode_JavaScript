## 剑指 Offer 66. 构建乘积数组

### 1. 两个dp数组

一个存放每个数左边乘积，一个存放每个数右边乘积

但在递推过程中，dp数组当前值只和前一个数有关，所以可以滚动数组

### 2. 滚动数组，将dp数组优化成单个变量

```javascript
/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
    // 定义结果数组
    let res=new Array(a.length).fill(1);
    // 存放右边乘积的变量
    let temp=1;
    // 先获得每个数左边乘积，直接放入数组
    for(let i=1;i<a.length;i++){
        res[i]=res[i-1]*a[i-1];
    }
    // 再获得每个数右边乘积，并与数组中已有的左边乘积再相乘
    for(let j=a.length-2;j>=0;j--){
        temp*=a[j+1];
        res[j]*=temp;
    }
    return res;
};
```

### 3. 两个for循环遍历优化成一个，在一个for循环中同时处理左右乘积