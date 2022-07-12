function order(words){
  if (!words) {
    return ""
  }
  let arr = words.split(' ')
  let indices = arr.map(x => x.match(/\d+/)[0])
  let answer = []
  
  for (let i=0; i<indices.length; i++) {
    let index = indices[i]
    answer[index] = arr[i]
  }

  return answer.filter(item => item).join(' ')
}
