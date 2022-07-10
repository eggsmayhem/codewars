function solve(s){
  let uppercase = 0;
  let lowercase = 0;
  let nums = 0;
  let special = 0;
  
  let deb = []
  
  for (let i=0; i<s.length; i++) {
    if (/[~`!#/)/(@.$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(s[i])) {
      special++
    }
    else if (/[a-z]/.test(s[i])) {
      lowercase++
    }
    else if (/[A-Z]/.test(s[i])) {
      uppercase++
    }
    else if (Number(s[i]) || s[i] === '0' ) {
      nums++
      console.log(s[i])
    }
//     deb.push(s[i])
  }
//   console.log(deb)
  console.log(s)
  return [uppercase, lowercase, nums, special]
}
