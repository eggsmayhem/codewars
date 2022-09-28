export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  let dogAge: number = 0;
  let catAge: number = 0;
  let humanAge: number = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      dogAge += 15;
      catAge += 15;
    }
    else if (i === 2) {
      dogAge += 9;
      catAge += 9;
    }
    else {
      dogAge += 5;
      catAge += 4;
    }
    humanAge += 1;
    
  }
  return [humanAge, catAge, dogAge];
}
