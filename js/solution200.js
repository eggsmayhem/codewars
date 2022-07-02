let mygcd = function(a,b) {
  if (!b) {
    return a;
  }
  return mygcd(b, a % b);
}
