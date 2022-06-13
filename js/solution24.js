//The Supermarker Queue
//
function queueTime(customers, n) {
  let lines = new Array(n).fill(0)
  for (let person of customers) {
    let index = lines.indexOf(Math.min(...lines))
    lines[index]+=person
  }
  return Math.max(...lines)
 
}
