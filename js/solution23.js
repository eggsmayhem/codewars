// Equal Sides Of An Array
//
function findEvenIndex(arr){
  let leftTotal = 0
  let rightTotal = 0
  for (let i = 0; i < arr.length; i++) {
    leftTotal = arr.slice(0,i).reduce((sum,x) => sum + x, 0)
    rightTotal = arr.slice(i+1).reduce((sum,x) => sum + x, 0)
    if (leftTotal === rightTotal) {
      return i
    }
  }
  return -1
}
