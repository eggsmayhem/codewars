function vowelIndices(word){
  const vowels = "aeiouyAEIOUY"
  let answer = []
  word.split('').forEach((item, index) => {
    if (vowels.includes(item)) {
      answer.push(index+1)
    }
  })
  return a
