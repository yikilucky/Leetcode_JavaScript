## 剑指 Offer 20. 表示数值的字符串

### 有限状态自动机

先列出所有状态，再画出状态转移图

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
      let state=[
          { ' ': 0, 's': 1, 'd': 2, '.': 4 }, 
          { 'd': 2, '.': 4 } ,                
          { 'd': 2, '.': 3, 'e': 5, ' ': 8 }, 
          { 'd': 3, 'e': 5, ' ': 8 },         
          { 'd': 3 },      
          { 's': 6, 'd': 7 },                 
          { 'd': 7 },                         
          { 'd': 7, ' ': 8 },                 
          { ' ': 8 }            
      ];
      let cur=0;
      let next='';
      for(let char of s){
          if(char===' '||char==='.') next=char;
          else if(char==='+'||char==='-') next='s';
          else if(+char>=0||+char<=9) next='d';
          else if(char==='e'||char==='E') next='e';
          else next='?';
          if(next in state[cur]){
              cur=state[cur][next];
          }else return false;
      }
      return cur===2||cur===3||cur===7||cur===8;
};
```

要注意 空格 会隐形转成数字0，所以可以把空格的判断放前面，数字的判断放后面