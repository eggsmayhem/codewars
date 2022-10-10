multiplicationTable = function(size) {
  const mainArray = [];
  let count = 1;
  while (count <= size) {
    for (let i = 1; i < size+1; i++) {
      let temp = new Array(size).fill(count)
      let subArray = temp.map((item, index) => count * (index + 1))
      mainArray.push(subArray)
      count++
    }
  }
  return mainArray
}
