//Transpose two strings in an array
//
//


function transposeTwoStrings (array) {
  let answer = ""
  const length = Math.max(array[0].length, array[1].length)
  for (let i = 0; i< length; i++) {
    let first = array[0][i] || " "
    let second = array[1][i] || " "
    if (i !== length - 1) {
      answer = answer.concat(first, " ", second, "\n")
    }
    else {
      answer = answer.concat(first, " ", second)
    }

  }

  return answer

}
