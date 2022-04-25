function interest(P,r,n) {
  console.log(`P : ${P}`)
  console.log(`r: ${r}`)
  console.log(`n: ${n}`)
  let simple = Math.round(P + (P * r) * n)
  let amount;

  for (let i=1; i<=n; i++) {
    amount = Math.round(P * Math.pow( 1.0 + r, i ));
  }
  
  if (n===0) {
    amount = P
  }
  return [simple, amount]
}
