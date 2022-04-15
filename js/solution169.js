function largestPairSum (numbers) {
  let sorted = numbers.sort((a,b) => a-b)
  const bigOne = sorted.pop()
  const bigTwo = sorted.pop()
  return bigOne + bigTwo
}
