function digitalRoot(n) {
  if (n.toString().length === 1) return n;
  let num = n.toString().split('').map(x=>Number(x)).reduce((sum, item) => sum + item, 0);
  return digitalRoot(num)
}
