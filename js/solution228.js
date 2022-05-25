function isOddHeavy(n){
  let evens = []
  let odds = []
  for (let i=0; i<n.length; i++) {
    n[i] % 2 === 0 ? evens.push(n[i]) : odds.push(n[i])
  }
  
   if (!odds.length) {
    return false
  }
  
  if(!!odds.length && !evens.length) {
    return true
  }
  
  let evensSorted = evens.sort((a,b) => a - b)
  let highestEven = evensSorted.pop()
  
 
  
  //test
  
  console.log(evens)
  console.log(odds)
  console.log(highestEven)
  for (let i=0; i<odds.length; i++) {
    if(! (odds[i] > highestEven)) {
      return false
    }
  }
  return true;
}
