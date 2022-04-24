function minimumSteps(numbers, value){
  console.log(numbers)
  console.log(value)
  let sorted = numbers.sort((a,b)=>a-b)
  let placeholder = 0;
  let i;
  for (i=0; i<sorted.length; i++) {
    placeholder += sorted[i]
    if (placeholder >= value) {
      console.log(`i: ${i}`)
      return i
    }
  }

}
