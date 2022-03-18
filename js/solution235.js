function zeroAndOne(s) {
  let arr = s.split('');
  let i = 1;
  while (i < arr.length) {
    if(arr[i] != arr[i-1]) {
      arr.splice(0,2)
      console.log(arr)
    }
    else {
      i++
    }
  
  }
  return arr.length;
}
