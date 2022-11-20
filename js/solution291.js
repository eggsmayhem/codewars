//LC 125
//
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, "").toLowerCase()
    // return s === s.split().reverse().join();
//     for (let end = s.length - 1, start = 0; start <= end; end--, start++) {
//         if(s[start] !== s[end]) return false;
//     }
//     return true;
    let start = 0
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return false
            
        }
        start++
        end--
    }
    return true;
    
};
