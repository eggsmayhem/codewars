
//Narcissitic Numbers 
//
function isNarcissistic(n) {
//   let testNum = n
  let l = n.toString().length
  let arr = n.toString().split('')
  return n === arr.reduce((narc, item) => narc + (item ** l), 0)

}
