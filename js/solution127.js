function powersOfTwo(n){
  let counter = 0
  let arr = []
  while (counter <=n) {
    arr.push(2**counter)
    counter++
  }
  return arr
}
