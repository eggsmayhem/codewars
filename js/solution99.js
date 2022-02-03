function findOutlier(integers){
  let evens = 0;
  let odds = 0;
  
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 ===0) {
      evens++
    }
    else {
      odds++
    }
  }
  
  if (evens > odds) {
    for (let i = 0; i <integers.length; i++) {
      if (integers[i] % 2 != 0) {
        return integers[i]
      }
    }
  }
  
  if (evens < odds) {
    for (let i = 0; i <integers.length; i++) {
      if (integers[i] % 2 === 0) {
        return integers[i]
      }
    }
  }
  
  
}
