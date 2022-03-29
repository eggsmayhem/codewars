function getSum( a,b ) {
  console.log(`a: ${a} , b: ${b} `)
  let arr = [a,b].sort((a,b) => a -b)
  console.log(`arr ${arr}`)
  let answer = []
  while (arr[0] <= arr[1]) {
    answer.push(arr[0])
    arr[0]++
  }
  return answer.reduce((sum, x) => sum + x, 0)
}
