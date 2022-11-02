//Detect Pangram
//
function isPangram(string){
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(' ').join('');
  console.log(string);
  for (let char of alphabet) {
    console.log(char)
    if (!string.includes(char)) return false;
  }
  return true;
}
