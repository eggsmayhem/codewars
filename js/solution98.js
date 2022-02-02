function narcissistic(value) {
  console.log(value)
  let length = value.toString().length
  console.log(value.toString().split('').reduce((sum, x) => sum + x**length))
  
  return value === value.toString().split('').reduce((sum, x) => sum + x**length, 0)
}
