//Multiples of 3 or 5
//
function solution(number){
  let answer = []
  let numbers = []
  for (let i = 0; i < number; i ++) {
    numbers.push(i)
  }
  
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 3 === 0 || numbers[j] % 5 === 0) {
      answer.push(numbers[j])
    }
  }
  
  return answer.reduce((sum,x)=> sum + x, 0)
  
}
