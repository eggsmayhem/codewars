// complete the function
function solution(string) {
  const arr = string.split('');
  let arrCopy = [...arr]
  
  let counter = 0;
  for (let i=0; i<arr.length; i++) {
    if(arr[i] === arr[i].toUpperCase()) {
      arrCopy.splice(counter+i, 0, ' ')
      counter++
    }
  }
  

  return arrCopy.join('')
}
