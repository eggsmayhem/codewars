function squareDigits(num){
  let numString = num.toString();
  console.log(`numString: ${numString}`)
  let arr = numString.split('')
  console.log(`arr: ${arr}`)
  let mapped = arr.map(item => parseInt(item) ** 2).join('')
  return parseInt(mapped)
}
