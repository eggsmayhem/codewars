function wave(str){
  let result = []
  let word
  for (let i=0; i<str.length; i++) {
    word = str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1)
    if (str[i] !== " ") {
      result.push(word)
    }
    
  }
  console.log(result)
  return result
}
