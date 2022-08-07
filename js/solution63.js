//Valid Anagram
//
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const N = s.length
    
    const freq = {}
    
    for (let i=0; i<N; i++) {
        freq[s[i]] = (freq[s[i]] || 0) + 1
        freq[t[i]] = (freq[t[i]] || 0) - 1
    }
    for (let key in freq) {
        if (freq[key] !== 0) return false
    }
    
    return true
}
