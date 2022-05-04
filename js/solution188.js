function XO(str) {
    return str.toLowerCase().split('').filter(x => x === "x").length === str.toLowerCase().split('').filter(x => x === "o").length
}
