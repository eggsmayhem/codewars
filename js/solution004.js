//finding the greatest common denominator between two numbers using a recursive function / The Euclidean algorithm 

let mygcd = function(a,b) {
    if (!b) {
        return a;
    }
    return mygcd(b, a % b);
}