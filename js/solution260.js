//Get the mean of an array
//
function getAverage(marks){
  //array of integers
  //average rounded down to nearest integer
  // [2,2,4,4] => 3
  // Run a reduce for sum, divide result by marks.length, wrap in Math.floor
 return Math.floor(marks.reduce((sum, mark) => sum + mark, 0) / marks.length);
}
