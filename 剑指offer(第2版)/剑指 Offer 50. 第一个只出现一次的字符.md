## 剑指 Offer 50. 第一个只出现一次的字符

这道题考察 哈希表 和 有序哈希表，但JavaScript中的Map默认就是有序的，会按照插入顺序遍历(题外话：object是无序的)

如果是无序哈希表需要两次遍历字符串；如果是有序哈希表，遍历字符串和哈希表各一次，由于字符串存在重复字符，遍历哈希表会比遍历字符串更省时间，这对于长字符串来讲更友好

除了Map，也可以Array实现，但需要两次遍历字符串

不过要注意Map的has, get, set方法的时间复杂度都是O(n)，所以要尽量减少这些操作

方法一：value存的是字符出现次数

```javascript
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let map=new Map();
    for(let i of s){
        map.set(i,map.has(i)?map.get(i)+1:1);
    }
    for(let i of map.keys()){
        if(map.get(i)===1) return i;
    }
    return ' ';
};
```

稍稍改进：不用get方法，若字符重复，value设为-1

```javascript
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let map=new Map();
    for(let i of s){
        map.set(i,map.has(i)?-1:1);
    }
    for(let i of map.keys()){
        if(map.get(i)===1) return i;
    }
    return ' ';
};
```

另外也可以用字符串的`indexOf`以及`lastIndexOf`方法