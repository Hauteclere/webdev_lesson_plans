function plus( b )      { return function( a ) { return a + b; }; };

console.log(plus(5));
// >> [Function (anonymous)]

// So we are returning a function, let's see what the function does:
console.log(plus(5)(0));
// >> 5
console.log(plus(5)(1));
// >> 6
console.log(plus(5)(3));
// >> 8
console.log(plus(5)(10));
// >> 15