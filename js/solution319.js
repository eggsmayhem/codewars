const removeConsecutiveDuplicates = s => {
  const arr = s.split(' ')
  return arr.filter((item,index,array) => {
    return array[index] !== array[index - 1]
  }).join(' ')
}
