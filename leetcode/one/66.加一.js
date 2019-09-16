/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.12%)
 * Likes:    327
 * Dislikes: 0
 * Total Accepted:    68.1K
 * Total Submissions: 169.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let index = digits.length - 1;index >= 0; index--) {
        let element = digits[index] + 1;
        console.log(element)
        if (element<10) {
            digits[index] = element;
            break
        }else{
            if(index==0){
                digits.splice(index,0,1)
                digits[index+1] = 0;
            }else{
                digits[index] = 0;
            }
        } 
    }
    return digits;
};

console.log(plusOne([9]));

