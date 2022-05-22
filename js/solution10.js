//given array of integers from 0 to 100 where 1 is missing, return the missing number
//
function missingNo(nums) {
  for (let i=0; i<=100; i++) {
    if (!nums.includes(i)) {
      return i
    }
  }
}
