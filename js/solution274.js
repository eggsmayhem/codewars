//Palindrome strings
//
function isPalindrome(line) {
  if (typeof(line) === "number") line = line.toString();
  console.log(line)
  let leng = line.length;
  let len = Math.floor(line.length/2);
  for (let i = 0; i < len; i++) {
    console.log(line[i], line[leng-1-i])
    if (line[i] !== line[leng- 1-i]) {
      return false
    }
  }
  return true;
}
