## 剑指 Offer 64. 求1+2+…+n

### 1. 幂运算+移位

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return (n+n**2)>>>1;
};
```

### 2. 递归

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return n&&n+sumNums(n-1);
};
```

原本递归的终止条件有if语句，现在用&&代替

