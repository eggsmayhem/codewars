// LC 67
//
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ay = a.split('').map(x=>parseInt(x, 2));
    let bee = a.split('').map(x=>parseInt(x, 2));
    let joined = ay.push(bee);
    console.log(joined);
    return parseInt(joined, 2)

};
