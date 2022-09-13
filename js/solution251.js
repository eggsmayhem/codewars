//Product Array (Array Series #5)
//
function productArray(numbers){
  const answer = []
  for (let i = 0; i< numbers.length; i++) {
    answer[i] = numbers.reduce((prod, item) => prod * item) / numbers[i]
  }
  return answer
}
