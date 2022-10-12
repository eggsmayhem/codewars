function modifyMultiply (str,loc,num) {
  const word = str.split(' ')[loc]
  const answer = Array(num).fill(word)
  return answer.join('-')
  
} 
