function DNAStrand(dna){
  const convert = {"A":"T", "G":"C", "T":"A", "C":"G"}
  return dna.split('').map(x=>convert[x]).join('')
}
