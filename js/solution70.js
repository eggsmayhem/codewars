//Split String
//
function solution(str){
  const length = str.length
  
  const answer = []
  
  if (length % 2 === 0) {
    for (let i = 0; i<str.length; i+=2) {
    answer.push(str[i]+str[i+1])
    }
  }
  
  else {
    for (let i = 0; i<str.length; i+=2) {
      if (i===length-1) {
        answer.push(str[i]+"_")
      }
      else {
         answer.push(str[i]+str[i+1]) 
      }
    } 
  }
  
  return answer
   
