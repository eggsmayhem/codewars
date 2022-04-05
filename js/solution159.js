function find_average(array) {
  return array && array.length ? array.reduce((sum, x) => sum + x) / array.length : 0
}
