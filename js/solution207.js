function findChildren(dancingBrigade) {
  let caps = dancingBrigade.split(/[a-z]/).join('').split('').sort()
  let lowers = dancingBrigade.split(/[A-Z]/).join('').split('').sort()
  let answer = []
  
  let j = 0

  for (let i=0; i<caps.length; i++) {
    answer.push(caps[i])
    while (lowers[j] === caps[i].toLowerCase()) {
      answer.push(lowers[j])
      j++
    }
  }
  return answer.join('')
  
}
