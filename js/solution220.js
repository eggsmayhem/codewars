function firstNonConsecutive (arr) {
  
  const result = arr.find((item, index) => item != arr[0] + index);
  return Number.isInteger(result) ? result : null;

}
