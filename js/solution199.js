function arrayLeaders(numbers){
  return numbers.filter((item, index) => numbers.slice(index+1).reduce((sum, x) => sum + x, 0) < item)
}
