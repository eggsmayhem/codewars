//summing the absolute value of a number's digits

function sumDigits(number) {
    let num = Math.abs(number);
    let numArray = num.toString().split('').map(Number);
    return numArray.reduce((sum, i) => sum + i);
  }