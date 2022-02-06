function digital_root(n) {
  
  if (n.length ===1) {
    return n
  }
  while (n.toString().length > 1) {
    n = n.toString().split('').map(x=>parseInt(x)).reduce((sum, y) =>sum+y)
  }
  return n
  
  
}
