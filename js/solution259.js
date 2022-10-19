//Is a number prime?
//
//Time complexity: O(sqrt(n))

//Space complexity: O(1)
function isPrime(num) {
  //integer
  //true if prime otherwise false
  // 7-> true, 8-> false
  // loop from 2 to not including number // if num % i === 0 return false 
  // -4 :  // -9
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

