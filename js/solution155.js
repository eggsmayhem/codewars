function minSum(arr) {
  return arr.sort((a,b) => (a - b)).reduce((sum, item) => sum + item * arr.pop(), 0)
}
