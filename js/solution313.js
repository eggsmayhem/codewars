export function grow(arr: number[]): number {
  return arr.reduce((prod, x) => prod * x);
}
