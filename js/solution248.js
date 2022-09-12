//Array plus array
//
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((sum,x)=>sum+x,0)
}
