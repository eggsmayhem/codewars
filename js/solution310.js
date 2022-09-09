export const hasSurvived = (attackers : number[], defenders : number[]) : boolean => {
  // two arrays of nums => which side has highest number alive, (in same num, both die, if one is empty, empty dies) if equal, highest sum
  //[1,1,1,""] [2,2,2,2] => 1. [t,t,t][t,t,t] 2. attackSurvivors: number, defendSurvivs: number => >? reduceCompare boolean response 
  console.log(attackers);
  console.log(defenders);
  //block-scope variables
  let attackSurvive: number = 0;
  let defendSurvive: number = 0;
  const len = Math.max(attackers.length, defenders.length);
  //function to determine each sides survivors
  for (let i = 0; i < len; i++) {
    if (attackers[i] > defenders[i]) {
      attackSurvive++;
    }
    else if (attackers[i] < defenders[i]) {
      defendSurvive++;
    }
    if (!attackers[i] && defenders[i]) {
      defendSurvive++;
    }
    if (attackers[i] && !defenders[i]) {
      attackSurvive++;
    }
  }
   console.log(attackSurvive);
   console.log(defendSurvive);
  
  if (attackSurvive > defendSurvive) {
    return false;
  }
  if (attackSurvive < defendSurvive) {
    return true;
  }
  
  const defSurv = defenders.reduce((sum, item) => sum + item, 0);
  const attSurv = attackers.reduce((sum, item) => sum + item, 0);
  return defSurv > attSurv || defSurv === attSurv;

  
}
