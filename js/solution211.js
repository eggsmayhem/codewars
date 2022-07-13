function feast(beast, dish) {
  let starting = beast.charAt(0)
  let ending = beast.charAt(beast.length - 1)
  
  return dish.charAt(0) === starting && dish.charAt(dish.length - 1) === ending ? true : false
}
