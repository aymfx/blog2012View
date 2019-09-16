/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.44%)
 * Likes:    676
 * Dislikes: 0
 * Total Accepted:    139.4K
 * Total Submissions: 247K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) {
        return false
    } 
    let num = String(x)
    let harf = num.length/2-1;
    let length = num.length
    for (let start = 0, end = length - 1; start <= harf; start++, end--) {
      if (num[start] != num[end]) {
        return false;
      }
    }
    return true   
};

// var isPalindrome = function(x) {
//     const xs = Math.abs(x) + ''
//     const xl = x + ''
//     let iso, length
//     let ise = false
//     if (x < 0) {
//         ise = true
//     }
//     (xl.length) % 2 == 0 ? iso = true : iso = false
//     if (iso) {
//         length = Math.floor((xs.length) / 2)
//         for (let i = 0; i <= length; i++) {
//             if (xs[i] != xs[xl.length - 1 - i] || ise) {
//             return false
//             }
//         }
//     } else {
//         length = Math.floor(xs.length / 2) - 1
//         for (let i = 0; i <= length; i++) {
//             if (xs[i] != xs[xl.length - 1 - i] || ise) {
//             return false
//             }
//         }
//     }
//     return true
// }
console.log(isPalindrome(01));
