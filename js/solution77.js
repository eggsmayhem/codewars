function bubblesortOnce(a) {
  let copy = a.slice()
  for (let i=0; i<a.length; i++) {
  if (copy[i] > copy[i+1]) {
    [copy[i], copy[i+1]] = [copy[i+1], copy[i]]
  }
  }
  return copy
}
