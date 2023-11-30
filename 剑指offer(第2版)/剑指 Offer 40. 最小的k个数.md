## 剑指 Offer 40. 最小的k个数

可以使用各种排序算法

### 1. 堆排序

用数组中前k个元素构建大小为k的大顶堆。遍历数组中剩余元素，和堆顶元素进行比较，若剩余元素的值更小，则和堆顶元素交换，并调整堆结构

```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if(!k) return [];
    // 调整堆结构
    function heapify(arr,i,length){
        for(let j=2*i+1;j<length;j=2*j+1){
            if(j+1<length&&arr[j]<arr[j+1]) j++;
            if(arr[i]<arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]];
                i=j;
            }else break;
        }
    }
    // 用数组中前k个元素构建大小为k的大顶堆
    for(let i=Math.floor(k/2-1);i>=0;i--){
        heapify(arr,i,k);
    }
    // 遍历数组中剩余元素，和堆顶元素进行比较
    // 若剩余元素的值更小，则和堆顶元素交换，并调整堆结构
    for(let i=k;i<arr.length;i++){
        if(arr[i]<arr[0]){
            [arr[i],arr[0]]=[arr[0],arr[i]];
            heapify(arr,0,k);
        }else continue;
    }
    return arr.slice(0,k);
    
};
```

**待施工，和215一起看**

