//Split Strings
//
function solution(str){
  const answer = [];
  for (let i = 0; i < str.length; i+=2) {
    str[i+1] ? answer.push(str[i] + str[i+1]) : answer.push(str[i]);
  }
  if (str.length % 2 !== 0) {
    let tail = answer.pop();
    answer.push(tail + "_");
  }
  
  return answer; 
   
}
