/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.28%)
 * Likes:    633
 * Dislikes: 0
 * Total Accepted:    103.4K
 * Total Submissions: 301.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if (strs.length<=0) {
      return ''
   }
   strs.sort((a, b) => a.length - b.length > 0);
   let origin = strs[0].split('');
   let str = '';
   for (const iterator of origin.values()) {
     let falg = strs.every(string => string.startsWith(str + iterator));
     console.log(falg, iterator);
       if(!falg){
            return str;
       }
       str += iterator;
   }
   return str;
};

console.log(longestCommonPrefix(["a"]));

