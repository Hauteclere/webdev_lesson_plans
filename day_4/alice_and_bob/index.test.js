/* 
-> output error msg if first arg is not array
-> output error msg if array contains non-numbers
-> throw exception if second arg is not positive integer
-> returns array
-> output contains no more than n repeats (where n == second arg)
-> output contains all input motifs

*/

const cullList = require("./index");

test('returns error msg if first arg != array', () => {
    expect(cullList(4, 1)).toBe("Bad argument!");
});

test('outputs error msg if array has non-numbers', () => {
    expect(cullList([true, null, "hello"], 2)).toBe("Bad array!");
});

test('throws exception is second arg is not positive int', () => {
    expect(() => { cullList([1, 1, 3], "hi") }).toThrow();
});

test('returns an array', () => {
    expect(Array.isArray(cullList([1, 1, 1, 1, 3], 2))).toEqual(true);
});

test('returns array with no more than n repeats', () => {
    expect(cullList([1, 1, 1, 1, 3], 2)).toStrictEqual([1, 1, 3]);
});

test('doesnt cull unnecessarily', () => {
    expect(cullList([2, 2, 2, 2, 2, 4, 4, 4, 5], 3)).toEqual(expect.arrayContaining([2, 4, 5]));
});