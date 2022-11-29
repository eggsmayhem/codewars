function gimme (triplet) {
  const sorted = [...triplet].sort((a, b) => a - b, 0)[1];
  return triplet.indexOf(sorted);
}
