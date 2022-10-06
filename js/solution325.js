function last(x){
  console.log(x)
  return x.split(' ').sort(function(a,b) {
    return ('' + a[a.length - 1]).localeCompare(b[b.length - 1]);
  })
  
  

}
