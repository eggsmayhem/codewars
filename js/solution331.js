function mygcd(x,y){
  let high = Math.min(x, y);
  while (high > 0) {
    if (x % high === 0 && y % high === 0) {
      return high;
    }
    high--;
  }
}
