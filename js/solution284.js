function absentVowel(x){
  const vowels = {"a": 0, "e": 1, "i": 2, "o":3, "u":4};
  const arr = x.split('').map(lett => lett.toLowerCase()).forEach(x => {
    if (vowels.hasOwnProperty(x)) {
      vowels[x] = vowels[x] - 5
    }
  });
  
  for (let key in vowels) {
    if (vowels[key] >= 0) return vowels[key]
  };
  

}
