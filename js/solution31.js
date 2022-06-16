//Give me a Diamond
//
function diamond(n){
  if (n<1 || n % 2 === 0) {
    return null
  }
  if (n===1) {
    return "*\n"
  }
  let  answer = []
  let ast = "*"
  let space = " "
  //establish the number of rows, the total starts with 1 and is always n
  let counter = 0;
  
  for (let i = 1; i < n; i+=2) {
    counter++
  }
  console.log(counter)
  
  for (let i =1; i<=n; i+=2) {
      answer.push(space.repeat(counter)+ast.repeat(i)+"\n")
      counter--
  }
  let flip = [...answer]
  flip.pop()
  flip.reverse()
  
  let complete = [...answer, ...flip]
  
  return complete.join('')
  
 
  return complete
  console.log(complete)
}
