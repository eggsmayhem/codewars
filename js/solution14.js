//Minimum Sum or Array
//
//function minSum(arr) {
  let sorted = arr.sort((a,b) => a - b);
  let high = 0;
  let low = 0;
  let answer = 0;
  while (sorted.length > 0) {
    high = sorted.pop()
    low = sorted.shift()
    answer += high * low
  }
  return answer
}
