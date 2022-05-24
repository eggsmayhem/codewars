function high(x){
  let arr = x.split(' ').map(s=>[...s].reduce((a,b)=> a+ b.charCodeAt(0)-96, 0))
  return x.split(' ')[arr.indexOf(Math.max(...arr))]
}
