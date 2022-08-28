//Ce*s*r*d Strings
//
function uncensor(infected, discovered) {
  const disc = [...discovered]
  return [...infected].map(el => el === "*" ? disc.shift() : el).join('')
}
