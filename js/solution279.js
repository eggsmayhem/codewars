//Valid Anagram
//
var isAnagram = function(s, t) {
    
//     if (s.length !== t.length) return false
    
//     const N = s.length
    
//     const freq = {}
//     for (let i=0; i<N; i++) {
//         freq[s[i]] = (freq[s[i]] || 0) + 1
//         freq[t[i]] = (freq[t[i]] || 0) - 1
//     }
//     for (let key in freq) {
//         if (freq[key] !== 0) return false
//     }
//     return true
    
//     NOTE: We did NOT use 
//       for (let x of freq) {
//         if (x !== 0) return false
//     }
//     it returned "object is not iterable?" Apparently, for hashmaps, you need to iterate the keys (which makes sense, since that values are just a count, and the keys are what we're actually analyzing)
    if (s.length !== t.length) return false;
    // const shash = {};
    // const thash = {};
    // for (let i = 0; i < s.length; i++) {
    //     if (shash[s[i]]) {
    //         shash[s[i]]++ 
    //     }
    //     else {
    //         shash[s[i]] = 1;
    //     }
    //     if (thash[t[i]]) {
    //         thash[t[i]]++ 
    //     }
    //     else {
    //         thash[t[i]] = 1;
    //     }
    // }
    // console.log(shash)
    // console.log(thash)
    // for (let key in shash) {
    //     if (!thash[key]) return false;
    //     if (shash[key] !== thash[key]) {
    //         return false;
    //     }
    // }
    // return true;
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1
        hash[t[i]] = (hash[t[i]] || 0) - 1
    }
    for (let key in hash) {
        if (hash[key] !== 0) return false;
    }
    return true;
    // return s.split('').sort().join('') === s.split('').sort().join('')
        
}
