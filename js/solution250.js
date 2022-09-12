//Sum of differences in array
//
function sumOfDifferences(arr) {
  let sum = 0
  let desc = arr.sort((a,b) => b - a)
  for (let i = 0; i<desc.length - 1; i++) {
    sum+= (desc[i] - desc[i+1])
  }
  return sum
    
}
