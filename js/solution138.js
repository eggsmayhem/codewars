function sortArray(array) {
//   let oddInds = []
  let odds = []
  for (let num of array) {
    if (num % 2 != 0) {
      odds.push(num)
    }
  }
  //sort the odd numbers
  let sorted = odds.sort((a,b) => a-b)
  
  let counter = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      array[i] = sorted[counter]
      counter++
    }
  }
  return array
}
