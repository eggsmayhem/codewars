function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort((a,b) => a - b)
  let first = sorted.shift()
  let second = sorted.shift()
  return first + second
}
