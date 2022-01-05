// write the function isAnagram
var isAnagram = function(test, original) {
  let o = original.toLowerCase().split('').sort().join('');
  let t = test.toLowerCase().split('').sort().join('');
  return o === t ? true : false
}
