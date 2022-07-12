//Vowel remover
//
function shortcut (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return string.split('').filter(x => !vowels.includes(x)).join('')
}
