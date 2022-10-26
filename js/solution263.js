//Nth Smallest Element (array Series #4)
//
function nthSmallest(arr, pos){
  //array of integers 
  //return nth smallest int
  //[-3,4,5,8,9], 3 -> 5 [2th index]
  
  return arr.sort((a,b) => a - b)[pos - 1]
}
