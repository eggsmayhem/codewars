//LC 20 Valid Parenthesis
//
//var isValid = function(s) {
    //need to determine that count of pairs matches
    // [{()}]  ///make sure counts are same and no repeats
    //what you shift neets to match what you pop!

    //create a stack?

    //{}{[}
    //}]
    //create stack
    const expected = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            expected.push(")")
        }
        else if (s[i] === "[") {
            expected.push("]")
        }
        else if (s[i] === "{") {
            expected.push("}")
        }
        //if it's a closing parenthesis, make sure it matches what we pushed into the stack above
        else if (expected.pop() !== s[i]) {
            return false;
        }
    }
    return !expected.length;
};
