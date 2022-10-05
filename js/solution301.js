// LC 409
//
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //string
    //longest palindrome that could be built LENGTH
    //abccccdd -> ccdbdcc
    //evens go towards count. +1 odd.
    //check for evens and odds. 
    //if no odds, length of evens. If odds, length - odds + 1 + evens
    if (s.length === 1) return 1;
    const chars = {};
    for (let i = 0; i < s.length; i++) {
        chars[s[i]] = (chars[s[i]] || 0) + 1;
    }
    console.log(chars)
    let odds = 0;
    for (let key in chars) {
        if (chars[key] % 2 !== 0) {
            odds++
        }
    }
    console.log(odds)

    return odds ? s.length - odds + 1: s.length;
};
