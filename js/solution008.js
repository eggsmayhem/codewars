//take an array and return each number + it's position in the array. (First position is number). If the result is two digits, return only the second digit of the number
//

function increment(nums) {
    return nums.map((item, index) => (item + index + 1) % 10);
}
