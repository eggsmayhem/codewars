function longest(s1, s2) {
  let concat = [...s1, ...s2]
  return concat.filter((item, index) => concat.indexOf(item) === index).sort().join('')
}
