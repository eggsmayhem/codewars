function digitize(n) {
  return n.toString().split('').map(x=>parseInt(x)).reverse()
}
