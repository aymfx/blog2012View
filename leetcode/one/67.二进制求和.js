/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (49.84%)
 * Likes:    229
 * Dislikes: 0
 * Total Accepted:    34.3K
 * Total Submissions: 68.7K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let num = parseInt(a,2) + parseInt(b,2)
    return num.toString(2);
};

console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);
console.log(
  parseInt(
    "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000",2
  )
);

console.log(
  "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
);

