//LC 383
//
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    
    let mag = {};
    
    for (let i = 0; i < magazine.length; i++) {
        mag[magazine[i]] = (mag[magazine[i]] || 0) + 1;
    }
    
    for (let j = 0; j < ransomNote.length; j++) {
        if (!mag[ransomNote[j]]) return false;
        mag[ransomNote[j]]--;
        if (mag[ransomNote[j]] < 0) return false;
    }
    
    return true;
};
