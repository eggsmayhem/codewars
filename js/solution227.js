function isAllPossibilities(x){
  return x.length > 0 && x.every((item, index) => x.includes(index))
}
