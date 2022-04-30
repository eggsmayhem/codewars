function dontGiveMeFive(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) {
      arr.push(i)
    }
  }
  
  return arr.length;
    
}
