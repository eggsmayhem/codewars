function removeSmallest(numbers) {
  let indexOfSmallest = numbers.indexOf(Math.min(...numbers))
  return numbers && numbers.length ? [...numbers.slice(0, indexOfSmallest), ...numbers.slice(indexOfSmallest + 1)]: []
}
