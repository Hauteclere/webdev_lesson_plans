const { test, expect } = require("@jest/globals");
const expectExport = require("expect");
const highestNumber = require("./index");

test('Returns null from empty array', () => {
    expect(highestNumber([])).toBe(null);
});

test('Returns largest number in array', () => {
    expect(highestNumber([1, 2, 5])).toBe(5);
});

test('Handles negatives correctly', () => {
    expect(highestNumber([-1, -6, -3])).toBe(-1);
});

test('Ignores array elements that are non-numerical', () => {
    expect(highestNumber([1, 'two', -2, true])).toBe(1);
});

test('Array of only non-numbers returns null', () => {
    expect(highestNumber(["Oliver", false, null])).toBe(null);
});

test('Throws an exception when handed non-array', () => {
    expect(() => { highestNumber('hello') }).toThrow();
});

test('REALLY throws an exception from non-array >:|', () => {
    expect(() => { highestNumber({hello: "hello"}) }).toThrow();
});
