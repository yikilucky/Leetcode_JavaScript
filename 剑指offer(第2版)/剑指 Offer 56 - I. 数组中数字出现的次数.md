## 剑指 Offer 56 - I. 数组中数字出现的次数

异或运算性质：两个相同数字异或为0，任何数与0异或结果都为本身，即：

> a^a=0
>
> a^0=a

异或运算也满足交换律和结合律

如果nums中除了一个数只出现一次外，其余数字都出现两次，那么可以把所有数异或，结果即为只出现一次的数

那在该题中，由于有两个只出现一次的数，定为a,b，所以把所有数异或之后，得到a\^b。a和b至少有一位二进制位不同，不同的那一位的异或结果是1，所以就找a\^b异或结果中的第一个1，根据这一位把所有数划成两堆，主要是把a和b放到不同堆里，其他数无所谓，在各个堆里一定是成双出现。最后分别把两个堆的数异或操作就可分别得到两个只出现一次的数

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let res=0;
    // 得到a^b
    for(let num of nums){
        res^=num;
    }
    let m=1;
    // 确定a和b中不同的一位
    while(true){
        if(res&m) break;
        m <<=1;
    }
    let x=0,y=0;
    // 分成两堆
    for(let num of nums){
        if(num&m) x^=num;
        else y^=num;
    }
    return [x,y];
};
```

