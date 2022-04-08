// The marketing team is spending way too much time typing in hashtags. 
// Let's help them with our own Hashtag Generator!

// -> If the input or the result is an empty string it must return false. 
// -> It must start with a hash symbol (#).
// -> Hashtags cannot contain spaces
// ->  All words must have their first letter capitalized. 
// -> If the final result is longer than 140 chars it must return false.

function hastagGen(inputString) {
    let result = "#";

    if ((inputString.length<1) || (inputString.length>140)) {
        return false;
    }

    let inputArr = inputString.split(" ");

    for (let index in inputArr) {
        [firstLetter, ...theRest] = inputArr[index];
        inputArr[index] = [firstLetter.toUpperCase(), ...theRest].join("");
    }

    result += inputArr.join("");

    return result;
}

module.exports = hastagGen;