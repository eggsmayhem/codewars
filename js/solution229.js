function isNice(arr) {
  console.log(arr)
  if (arr.length !== 0) {
    for (let i=0; i<arr.length; i++) {
      if (!arr.includes(arr[i]+1) && !arr.includes(arr[i]-1)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
