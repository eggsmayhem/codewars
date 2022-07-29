function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a,b)=>a-b).filter((item, index, array) => array.indexOf(item) === index)
}
