//Array.diff
//
function arrayDiff(a, b) {
  //takes in two arrays of numbers
  // all items that are in b should be removed from a (including repeats in a), then return a
  // [1,2,2,3], [2] -> [1,3]
  return a.filter(item => !b.includes(item));
}
