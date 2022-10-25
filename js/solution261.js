//Nth Samllest Element (Array Series # 4)
//
//
function nthSmallest(arr, pos){
  //array of ints, length at least 3, could have negatives, nth smallest, not removing dupes
  //sort from smallest, grab index x n-1
  //[1,2,2,3,4], 3 -> 2
  return arr.sort((a,b) => a - b)[pos - 1]
}
