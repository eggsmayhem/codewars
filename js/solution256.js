//Pyramid Array
//
function pyramid(n) {
//integer >=0
  //array of ascending subarrays starying with length 1 (or just an empty array if n=0), filled with ones, utnil length === n
  // n = 3, [[1], [1,1], [1,1,1]]
  // create empty array
  const masterArray = []
  //if n === 0 return []
  if (n === 0) {
    return masterArray
  }
  //starting with 1, up to and including n, new arrays of length i filled with ones get pushed to master array
  for (let i = 1; i <= n; i++) {
    let temp = Array(i).fill(1)
    masterArray.push(temp)
  }
  //master array returned
  return masterArray
}
