var countSheep = function (num){
  let answer = []
  for (let i =1; i<=num; i++){
    answer.push(`${i} sheep...`)
  }
  return answer.join('')
}
