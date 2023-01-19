String.prototype.toJadenCase = function () {
    return this.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
};

