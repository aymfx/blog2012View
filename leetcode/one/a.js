/**
 * @param {string} s
 * @return {boolean}
 */
let l = new Map([
    ['{','}'],
    ['[',']'],
    ['(',')'],
])
var isValid = function(s) {
    var arr = s.split('')
    for (const iterator of arr) {
        if(l.has(iterator)){
            r = l.get(iterator);
            let nums = arr.indexOf(r);
        }
    }
};
