// Define a function that will accept an array as its input, 
//and return the largest number in that array, even if it is a negative number. 
//If there are no numbers in the array, it should return null. 
//The function should ignore non-numbers without throwing an error.

// -> returns null if no numbers
// -> Accepts an array
// -> Throws an exception if non-array is argument
// -> returns largest number
// -> handles negative elements
// -> ignore non-numerical elements, with no error.

function highestNumber(arr) {

    if (!Array.isArray(arr)) {
        throw "The function argument must be an array!";
    }

    let result = Number.NEGATIVE_INFINITY;

    for (let element of arr) {
        if ((typeof element==="number") && (element>result)) {
            result = element;
        }
    }

    return result>Number.NEGATIVE_INFINITY ? result : null;
}

/* test('Throws an exception when handed non-array', () => {
    expect(() => { highestNumber('hello') }).toThrow();
}); */



module.exports = highestNumber;