function squareSum(numbers){
  return numbers.map(item => item ** 2).reduce((sum, x) => sum + x, 0)
}
