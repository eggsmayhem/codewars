//Array combinations
//
function solve(arr) {
  //array of subarrays, lengths unknown 
  return arr.map(x => [...new Set(x)]).reduce((prod,x) => prod * x.length, 1);
  
};
