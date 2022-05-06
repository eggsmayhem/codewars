function countPositivesSumNegatives(input) {
  return input && input.length ? [input.filter(x => x > 0).length, input.filter(y => y < 0).reduce((sum, item) => sum + item, 0)] : [];
}
