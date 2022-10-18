//Sum Mixed Array
//
//
function sumMix(x){
  //array of strings and numbers
  //single number, sum
  // [1,2,'3', '4] => 10
  // map array to all be numbers, run reduce on subsequent array to return the sum
  return x.map(y=> Number(y)).reduce((sum, item) => item + sum, 0)
}
