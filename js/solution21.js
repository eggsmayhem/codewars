//return highest value in an array without using Math.max, loops, or array methods (Mad Max: Recursion Road)
//
function max(arr) {
  if (!arr.length) 
    return -Infinity;
    
  if (arr.length === 1) 
    return arr[0];
  
  const [a, b] = [arr[0], max(arr.slice(1))];
  return a < b ? b : a;
}
