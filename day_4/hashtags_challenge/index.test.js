// For example: 
// "hello world"=> "#HelloWorld" 
// "Hi there flex track" => "#HiThereFlexTrack" 
// "" => false 
const longInput = "Today we live in a society in which spurious realities are manufactured by the media, by governments, by big corporations, by religious groups, political groups... So I ask, in my writing, What is real? Because unceasingly we are bombarded with pseudo-realities manufactured by very sophisticated people using very sophisticated electronic mechanisms. I do not distrust their motives; I distrust their power. They have a lot of it. And it is an astonishing power: that of creating whole universes, universes of the mind. I ought to know. I do the same thing." 

const hashtagGen = require("./index")

test('Empty string input = false output', () => {
    expect(hashtagGen("")).toBe(false);
});

test('Non-empty input results in output beginning with #', () => {
    expect(hashtagGen("A")).toBe("#A");
});

test('Function removes spaces from input', () => {
    expect(hashtagGen("A B").includes(" ")).toBe(false);
});

test('Function capitalises first letter of each word', () => {
    expect(hashtagGen("hello world")).toBe("#HelloWorld");
});

test('Function returns false when input is too long', () => {
    expect(hashtagGen(longInput)).toBe(false);
});

test('Function handles weird input', () => {
    expect(hashtagGen("Hi  6  I think this will    ?   fail...")).toBe("Hi6IThinkThisWill?Fail...");
})