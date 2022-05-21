function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  const youTime = pontoonDistance/youSpeed;
  if (dolphin) {
    sharkSpeed/=2
  }
  const sharkTime = sharkDistance/sharkSpeed;
  
  return youTime < sharkTime ? "Alive!" : "Shark Bait!"
  
}
