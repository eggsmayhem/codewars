//Higest Rank Number in an Array
//
function highestRank(arr){
  //array of numbers
  //most frequent, if tie, largest of these
  //[1,2,1,4,4,6]
  //{1:2, 2:1. 4:2, 6:1}
  console.log(arr);
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] + 1 || 1)
  }
  console.log(map)
  const mostOftenCount = Math.max(...Object.values(map));
  const possibleAnswers = [];
  for (let key in map) {
    if(map[key] === mostOftenCount) {
      possibleAnswers.push(key)
    }
  }
  
  return Math.max(...possibleAnswers);
