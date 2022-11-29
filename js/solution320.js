function averageLength(array) { 
  let container = [];
  console.log(array)
  let averageLength = Math.round(array.reduce((sum, x) => sum + x.length, 0)/array.length);
  for (let i = 0; i < array.length; i++) {
    let temp = new Array(averageLength).fill(array[i][0]).join('');
    container.push(temp);
  }
  return container;
  
}
