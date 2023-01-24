export function narcissistic(value: number): boolean {
  const len: number = value.toString().length;
  return value.toString().split('').map(x => Number(x)).reduce((sum, y) => sum + y ** len, 0) === value;
}

