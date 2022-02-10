//return the total number of smiling faces in the array
function countSmileys(arr) {
  console.log(arr)
  let smileys = 0
  for (let i =0; i<arr.length; i++) {
    if (arr[i].length === 2) {
      if ((arr[i][0] === ":" || arr[i][0] === ";") && (arr[i][1] === ")" || arr[i][1] === "D")) {
        smileys++
      }
    }
    if (arr[i].length === 3) {
      if ((arr[i][0] === ":" || arr[i][0] === ";") && (arr[i][1] === "-" || arr[i][1] === "~") && (arr[i][2] === ")" || arr[i][2] === "D")) {
        smileys++
      }
    }
  }
  return smileys

}
