//Multiplication Table

multiplicationTable = function(size) {
  let answer= [];


  let counter = 1;
  while (counter <=size) {
    let sub = new Array(size).fill(0)
    for (let i =0; i<sub.length; i++) {
      console.log(counter, i)
      sub[i] = counter * (i+1)
    }
    let temp = sub
    answer.push(sub)


    counter++
  }
  return answer
}
