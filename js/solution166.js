function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 != 0) {
    return -1
  }
  
  let squareUp = sq+1;
  while (Math.sqrt(squareUp) % 1 != 0) {
    squareUp+=1
  }
  return squareUp;
}
