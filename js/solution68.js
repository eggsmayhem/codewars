//Isograms
//
function isIsogram(str){
  const lower = str.toLowerCase()
  for (let i=0; i<lower.length; i++) {
    if (lower.indexOf(lower[i]) !== i) return false
  }
  return true
}
