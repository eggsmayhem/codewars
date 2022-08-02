function getMiddle(s)
{
  console.log(s)
  let wordArr = s.split('')
  
  if (wordArr.length % 2 != 0) {
    console.log(`Odd: ${wordArr[(wordArr.length+1)/2 - 1]}`)
    return wordArr[(wordArr.length+1)/2 - 1]
  }
  else {
    console.log(`Even: ${wordArr[wordArr.length/2 -1] + wordArr[wordArr.length/2]}`)
    return wordArr[wordArr.length/2 -1] + wordArr[wordArr.length/2]
  }
}
