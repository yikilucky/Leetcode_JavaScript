## 剑指 Offer 58 - II. 左旋转字符串
两种方法，第一种不增加额外存储空间，第二种将string->array
```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let length=s.length;
    let i=length-n;
    while(i){
        s=s[length-1]+s;
        i--;
    }
    return s.slice(0,length);
};
```
```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let arr=s.split("");
    let leftArr=arr.slice(0,n);
    let rightArr=arr.slice(n);
    return rightArr.join("")+leftArr.join("");
};
```