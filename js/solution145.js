function isCoprime(x, y) {
  const min = Math.min(x,y)
  let i = min
  while (i > 1) {
    if (x % i === 0 && y % i === 0) {
      return false
    }
    i--
  }
  return true
}
