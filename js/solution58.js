//Maximum number of words found in sentences
//
const mostWordsFound = function(sentences) {
    let max = 0
    sentences.forEach(x => {
        let temp = x.split(' ').length
        if (temp > max) {
            max = temp
        }
    })
    return max
    
};
