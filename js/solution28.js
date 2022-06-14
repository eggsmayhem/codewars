//Title Case
//


function titleCase(title, minorWords) {
    if (!title) {
        return ""
    }
    title = title.toLowerCase()
    title = title.split(' ')

    if (minorWords) {
        minorWords = minorWords.toLowerCase().split(' ')
    }
  //hard code
  
  //hardcode

    let firstWord = title.shift()
    if (firstWord.length ===1) {
        firstWord = firstWord.toUpperCase()
    }
    else {
        firstWord = firstWord[0].toUpperCase()+firstWord.slice(1)
    }

    let answer = [firstWord]

    let word = ""

    for (let i =0; i<title.length; i++) {
        //might need to nest these booleans rather than have them side by side 
        if (minorWords && minorWords.includes(title[i])) {
            word = title[i]
        }
        else {
            //maybe need to use slice on first character rather than two indices
            word = title[i][0].toUpperCase()+title[i].slice(1)
        }
        answer.push(word)
    }
    return answer.join(' ')
}
