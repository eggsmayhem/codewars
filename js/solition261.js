function repeats(arr){
//array of numbers, all unques except for 2 repeats
  //sum of uniques
  //[1,2,2,3,4,5,5] => 5
  //loop through arr, filter out dupes, retrun from a reduct
  for (let i = 0; i < arr.length; i++) {
    const j = arr.lastIndexOf(arr[i]);
    if (i !== j) {
      arr[i] = 0;
      arr[j] = 0;
    }
  }
  return arr.reduce((sum, x) => sum + x);
};
