/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let arr = new Array(n);
    for (let k = 0; k < arr.length; k++) {
        arr[k] = new Array(n);
    } //!循环创建二维数组
    let a = 1;
    for (let index = 0; index < n / 2; index++) {
        for (let j = index; j <= n - 2 - index; j++) {
            arr[index][j] = a;
            a++;
        }
        for (let i = index; i <= n - 2 - index; i++) {
            arr[i][n - 1 - index] = a;
            a++;

        }
        for (let j = n - 1 - index; j >= index + 1; j--) {
            arr[n - 1 - index][j] = a;
            a++;

        }
        for (let i = n - 1 - index; i >= index + 1; i--) {
            arr[i][index] = a;
            a++;
        }

    }
    if (n % 2) {
        arr[(n - 1) / 2][(n - 1) / 2] = a;
    }
    return arr;
};
//!二维数组要自己创建，这里用了循环，有没有别的简单法子
//!当n是奇数时，最中间的数要单独赋值

// @lc code=end

