//return the number of duplicates in an array. If the number appears 4 time, that would be 2 duplicates, and so on.
//

function duplicates(array) {
    let pairs = 0;
    const obj = {};
    array.forEach(i => {
        if (obj[i]) {
            pairs += 1;
            obj[i] = 0;
        } else {
            obj[i] = 1;
        }
    });
    return pairs;
}
