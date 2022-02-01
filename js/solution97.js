function digPow(n, p){
  let numArr = n.toString().split('').map(x=>parseInt(x))
  console.log(`n: ${n}`)
   console.log(`numArr ${numArr}`)
   console.log(`p: ${p}`)
  let arr = []

  let power = p
  for (let i = 0; i <numArr.length; i++) {
    arr.push(numArr[i] ** power)
    power++
  }
   console.log(`arr ${arr}`)
  let total = arr.reduce((sum,x) =>sum + x, 0)
  
  let k = 0
  
  while (k <= total/n) {
    if (k * n === total) {
      return k
    }
    k++
  }
  return -1       
         
}
