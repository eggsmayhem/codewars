export function solution(str: string, ending: string): boolean {
  return str.lastIndexOf(ending) === str.length - ending.length;
}
