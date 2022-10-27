//Duplicate Encoder
function duplicateEncode(word){
  // take in string
  //return string, 1->"(", 2+->")"
  //"hello"->"(())))(", apparently spaces count as a character
  //empty map, loop through word to create hashmap, loop through hashmap to create string
  const wordArray = [...word.toLowerCase()]
  return wordArray.map(letter => wordArray.lastIndexOf(letter) === wordArray.indexOf(letter) ? "(" : ")").join("");

}
