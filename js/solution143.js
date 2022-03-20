
function persistence(num) {
   if (num.toString().length === 1) {
     return 0
   }
   let count = 1
   let value = (''+num).split('').map(x=>parseInt(x)).reduce((prod,y) => prod * y)
   while (value.toString().length != 1) {
     value = (''+value).split('').map(x=>parseInt(x)).reduce((prod,y) => prod * y)
     count++
   }
  return count
 
}
