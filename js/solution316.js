function solution(str){
  return str.split('').reduce((sum, char) => char+sum, '')
}
