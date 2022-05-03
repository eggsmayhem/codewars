function removeSmallest(numbers) {
  let indexOfSmallest = numbers.indexOf(Math.min(...numbers));
  if (numbers) {
    return [...numbers.slice(0, indexOfSmallest), ...numbers.slice(indexOfSmallest+1)];
  } 
  else {
    return [];
  }
}
