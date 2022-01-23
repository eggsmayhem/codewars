function pipeFix(numbers){
  if (numbers.length === 1) {
    return numbers
  }
  const first = numbers.shift()
  const last = numbers.pop()
  let answer = []
  for (let i = first; i <= last; i++) {
    answer.push(i)
  }
  return answer
}
