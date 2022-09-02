function arrAdder(arr) {
  let answer = ''
  
  for (let i=0; i<arr[0].length; i++) {
    for (let j=0; j<arr.length; j++) {
      answer+= arr[j][i]
    }
    answer+= " "
  }
  return answer.trim()
}
