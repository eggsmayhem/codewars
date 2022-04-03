function findShort(s){
  console.log(s)
  let shortest = 1000;
  let arr = s.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest) {
      shortest = arr[i].length
    }
  }
  return shortest
}
