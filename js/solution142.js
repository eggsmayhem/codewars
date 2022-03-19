function longestConsec(strarr, k) {
    let longestLength = 0
    let concated = ""
    let longestString = ""
    if (k === 0 || k > strarr.length) {
      return ""
    }
    for (let i = 0; i<strarr.length; i++) {
      concated = ""
      let j = 0
      while (j <k && strarr[i+j]) {
        concated+=strarr[i+j]
        j++
      }
      if (concated.length > longestLength) {
        longestLength = concated.length
        longestString = concated
      }
      
    }
  return longestString
}
