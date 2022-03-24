function max(array) {
  if (!array.length) {
    return -Infinity
  }
  
  if (array.length===1) {
    return array[0]
  }
  
  const [a,b] = [array[0], max(array.splice(1))]
  return a > b ? a : b
}
