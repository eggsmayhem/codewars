function highAndLow(numbers){
  const nums = numbers.split(' ').map(x => parseInt(x))
  const arr = []
  arr.push(Math.max(...nums))
  arr.push(Math.min(...nums))
  return arr.join(' ')
}
