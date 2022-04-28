function incrementer(nums) { 
  return nums.map((item, index) => (item + index + 1) % 10)
}
