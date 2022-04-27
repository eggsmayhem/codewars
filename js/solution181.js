function barista(coffees){
  let sorted = coffees.sort((a,b) => a - b );
  
  let wait = 0;
  while(sorted.length) {
    wait += sorted[0] * sorted.length;
    sorted.shift()
    wait += sorted.length * 2
  }
  
  return wait;
}
