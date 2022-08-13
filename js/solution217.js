function sort(initialArray, sortingArray) {
  let arr = [];
  for (let i = 0; i < sortingArray.length; i++) {
    const index = sortingArray[i]
    arr[index] = initialArray[i]
  }
  return arr;
  
}
