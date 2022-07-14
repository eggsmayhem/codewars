function sumMix(x){
  return [...x].map( item => parseInt(item)).reduce((sum, x) => sum + x)
}
