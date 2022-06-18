// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
//
function sumDigPow(a, b) {
  let arr = []
  let counter = a;
  while (counter<=b) {
    arr.push(counter)
    counter++
  }
  
  console.log(arr)
  
  let answer = []
  
  
  for (let i =0; i<arr.length; i++){
    let sum = 0
    let inc = 1
    let digits = arr[i].toString().split('').map(x=>parseInt(x))
    for (let j = 0; j < digits.length; j++){
      sum+=(digits[j])**inc
      inc++
    }
    if (sum===arr[i]) {
      answer.push(arr[i])
    }
  }
  
  return answer
  
}
