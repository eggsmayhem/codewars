function getCount(str) {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i< str.length; i++) {
    if (vowels.includes(str[i])) {
      count++
    }
  }
  return count 
  
  
}
