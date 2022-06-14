//Detect Pangram
//
function isPangram(string){
  let letters = []
  let arr = string.toLowerCase().split('')
  for (let i = 0; i <arr.length; i++) {
    if (!letters.includes(arr[i]) && arr[i].match(/[a-z]/gi)) {
      letters.push(arr[i])
    }
  }
  console.log(arr)
  console.log(letters)
  if (letters.length === 26) {
    return true
  }
  return false
}
