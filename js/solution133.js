function isPalindrome(x) {
  let lower = x.toLowerCase()
  return lower.split('').reverse().join('') === lower
}
