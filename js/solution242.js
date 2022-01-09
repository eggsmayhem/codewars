function comp(array1, array2){
  if (array1 == null || array2 == null) {
    return false
  }
  let sorted1 = array1.sort((a,b)=> a - b).map(item => item**2).join('')
  let sorted2 = array2.sort((a,b)=> a - b).join('')
  console.log(array1)
  console.log(array2)
  
  console.log(sorted1)
  console.log(sorted2)
  
  
  return sorted1 == sorted2 ? true : false
}
