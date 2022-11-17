//Binary Solution 
var search = function(haystack, needle) {
    let start = 0;
    let end = haystack.length - 1;
    while (end >= start) {
        let mid = Math.floor((start+end)/2);
        if (haystack[mid] === needle) return mid
        if (haystack[mid] > needle) {
            end = mid - 1
        } 
        if (haystack[mid] < needle) {
            start = mid + 1
        }
       
    }    
    return -1;
};
