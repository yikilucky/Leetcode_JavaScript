## 剑指 Offer 33. 二叉搜索树的后序遍历序列

### 1. 递归

二叉搜索树的后序遍历结果中，最后一个元素就是根元素。然后从后序遍历结果中从左往右找第一个大于根元素的数，那么这个数左边部分就是根元素的左子树，这个数以及其右边部分就是根元素的右子树。左子树一定都小于根元素(找第一个最大数时已经遍历过了)，那么就只要判断右子树是否都大于根元素，若有小于根元素的数，那么返回false。最后再递归遍历左子树数组和右子树数组，看它们是否为二叉搜索树

```javascript
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    function traversal(arr,start,end){
        // 终止条件
        if(start>=end) return true;
        let right=end;
        // 从左往右找第一个比根元素大的数
        for(let i=start;i<end;i++){
            if(arr[i]>arr[end]){
                right=i;
                break;
            }
        }
        // 判断右子树元素是否都大于根元素
        for(let i=right+1;i<end;i++){
            if(arr[i]<arr[end]) return false;
        }
        // 递归遍历左子树数组和右子树数组
        return traversal(arr,start,right-1)&&traversal(arr,right,end-1);
    }
    return traversal(postorder,0,postorder.length-1);
};
```

### 2. 后序遍历倒序+单调栈