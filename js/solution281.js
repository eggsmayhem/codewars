//the average length
//

function averageLength(arr){
  let num = Math.round(arr.reduce((acc, cv) => acc + cv.length, 0) / arr.length )

  return arr.map(element => element[0].repeat(num))
}


