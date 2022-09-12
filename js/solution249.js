//CSV representation of array 
//
function toCsvText(array) {
   let counter = 0
   while (counter < array.length - 1) {
     array[counter] = array[counter].join(',') + '\n'
     counter++
   }
    if (counter === array.length) {
      array[counter] = array[counter].join(',')
    }
  return array.join('')
   
}
