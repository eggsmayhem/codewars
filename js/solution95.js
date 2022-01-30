function goodVsEvil(good, evil){
  good = good.split(' ')
  evil = evil.split(' ')
  let goodCount = 0;
  let evilCount = 0;
  const goodPoints = [1,2,3,3,4,10]
  const evilPoints = [1,2,2,2,3,5,10]
  console.log(good)
  console.log(evil)
  
  for (let i = 0; i<good.length; i++) {
    goodCount+=goodPoints[i]*good[i]
  }
  
   for (let i = 0; i<evil.length; i++) {
    evilCount+=evilPoints[i]*evil[i]
  }
  console.log(goodCount)
  console.log(evilCount)
  
  if (goodCount>evilCount) {
    return "Battle Result: Good triumphs over Evil"
  }
  if (evilCount>goodCount) {
    return "Battle Result: Evil eradicates all trace of Good"
  }
  else {
    return "Battle Result: No victor on this battle field"
  }

}
