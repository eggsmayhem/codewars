function positiveSum(arr) {
  
  return arr.filter(x => x > 0).reduce((sum, x) => sum + x, 0)
  
}
