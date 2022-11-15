//sort the odds
//
function sortArray(array) {
  const odds = array.filter(x => x % 2).sort((a,b) => b - a);
  return array.map(x => x % 2 === 0 ? x : odds.pop());   
}
