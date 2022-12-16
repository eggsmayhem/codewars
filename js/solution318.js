function dup(s) {
  return s.map(x => x.split('').filter((item, index, array) => array[index] !== array[index-1]).join(''))
};
