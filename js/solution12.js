//how many times you have to add the smallest numbers in an array before they are equal to or greater than the provided value
//
//
//
function minimumSteps(numbers, value){
  let sorted = numbers.sort((a,b)=>a-b)
  let placeholder = 0;
  let i;
  for (i=0; i<sorted.length; i++) {
    placeholder += sorted[i]
    if (placeholder >= value) {
      return i
    }
  }

}
