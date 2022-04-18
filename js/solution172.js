function alphabetWar(fight){
  let leftarr = [];
  let rightarr = [];
  for (let i=0; i<fight.length; i++) {
    if (fight[i] === 'w' || fight[i] === 'p' || fight[i] === 'b' || fight[i] === 's') {
      leftarr.push(fight[i]);
    }
    else if (fight[i] === 'm' || fight[i] === 'q' || fight[i] === 'd' || fight[i] === 'z') {
      rightarr.push(fight[i]);
    }
  }
console.log(`leftarr (letters) : ${leftarr}`);
console.log(`rightarr (letters) : ${rightarr}`);

let convert = {
    'w': 4,
    'm': 4,
    'p': 3,
    'q': 3,
    'b': 2,
    'd': 2,
    's': 1,
    'z': 1,
};

let left = leftarr.map(x=>convert[x])
let right = rightarr.map(x=>convert[x]);
  
let l = left.reduce((sum, item) => sum + item, 0);
let r = right.reduce((sum, item) => sum + item, 0);
if (l > r) {
    return 'Left side wins!'
}
else if (r > l) {
    return 'Right side wins!'
}
else {
    return "Let's fight again!"
    }
}
