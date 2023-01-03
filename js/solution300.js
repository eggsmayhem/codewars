// LC 70
//
/**
 * @param {number} n
 * @return {number}
 */
///1111, 112, 121, 2,1,1, 2,2
const cache = {
  "0": 1,
  "1": 1,
};

const climbStairs = function (n) {
  //base cases
  if (n <= 1) return 1;
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
};

