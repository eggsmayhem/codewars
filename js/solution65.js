//find the smallest power higher than a given value
//
function findNextPower(val, pow_) {
    const low = Math.floor((Math.pow(val, 1/pow_))) + 1
    const power = low**pow_
    return power
}
