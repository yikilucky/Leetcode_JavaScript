## 剑指 Offer 67. 把字符串转换成整数

### 模拟

字符有四种情况：空格、正负符号、数字、字母

判断是否越界的思路比较巧妙

```javascript
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    if(str==='') return 0; // 空串，返回0
    const max=2**31-1;
    const min=-(2**31);
    const boundary= Math.floor(2**31/10);
    let flag=1;
    let start=0;
    let res=0;
    while(true){
        if(str[start]===' '){
            start++;
            if(start===str.length) return 0; // 字符串仅包含空白字符，返回0
            continue;
        }else break;
    }
    if(str[start]==='-') flag=-1;
    if(str[start]==='-'||str[start]==='+') start++;
    // 此时的start要么是整数要么是字母，从start开始向后遍历
    for(let i=start;i<str.length;i++){
        if(!(str[i]>=0||str[i]<=9)) break; // 遇到字母
        if(str[i]===' ') break; // 遇到空格
        // 判断是否越界
        if(res>boundary||(res===boundary&&str[i]>7)){
            return flag===1?max:min;
        }
        // 对数字进行操作
        res=res*10+(+str[i]);
    }
    return flag*res;
};
```

