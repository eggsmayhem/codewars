//String transformer 
//
//function stringTransformer(str) {
  console.log(str)
  // string
  // string of words -> upper-lower, lower-upper, reverse order of words
  // Hello World -> wORLD hELLO
  //split (' '), reduce( char + accumulator, ',) map condiotnal char === char.toUpperCase()
  return str.split(' ').map(x => x.split('').map(y => y === y.toUpperCase() ? y.toLowerCase() : y.toUpperCase() )).reverse().map(x => x.join('')).join(' ')

}
