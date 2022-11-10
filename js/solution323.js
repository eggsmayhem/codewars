function isPalindrome(line) {
  return typeof line === 'string' 
    ? line.split('').reverse().join('') === line
    : line.toString().split('').reverse().join('') === line.toString()
    
}
