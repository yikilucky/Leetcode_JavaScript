## 剑指 Offer 05. 替换空格

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let res=s.split(" ");
    return res.join("%20");
};
```

