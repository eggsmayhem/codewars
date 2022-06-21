//Make the Deadfish Swim
//
function parse( data ) {
  let count = 0;
  let arr = []
  
  for (let i =0; i<data.length; i++) {
    switch(data[i]) {
        case "i":
          count++
          break;
        case "d":
          count--
          break;
        case "s":
          count = count**2
          break;
        case "o":
          arr.push(count)
          break;
    }
  }
  return arr
}

