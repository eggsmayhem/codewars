var findMissing = function (list) {  
  const space = (list[list.length-1] - list[0]) / list.length
  
  return list.filter((item,index)=>item !== list[0] + index * space)[0] - space
 
}
