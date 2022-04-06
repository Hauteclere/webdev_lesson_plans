// ----------------------------------
// ARITHMETIC:

function plus(right) {
    return (left) => {
        return left + right;
    }
}

function minus(right) {
    return (left) => {
        return left - right;
    }
}

function dividedBy(right) {
    return (left) => {
        return ~~(left / right);
    }
}

function times(right) {
    return (left) => {
        return left * right;
    }
}

// ----------------------------------------
// DIGITS

function zero(func) {
    if (!func) {
        return 0;
    } 
    return func(0);
}

function one(func) {
    if (!func) {
        return 1;
    } 
    return func(1);
}

function two(func) {
    if (!func) {
        return 2;
    } 
    return func(2);
}

function three(func) {
    if (!func) {
        return 3;
    } 
    return func(3);
}

function four(func) {
    if (!func) {
        return 4;
    } 
    return func(4);
}

function five(func) {
    if (!func) {
        return 5;
    } 
    return func(5);
}

function six(func) {
    if (!func) {
        return 6;
    } 
    return func(6);
}

function seven(func) {
    if (!func) {
        return 7;
    } 
    return func(7);
}

function eight(func) {
    if (!func) {
        return 8;
    } 
    return func(8);
}

function nine(func) {
    if (!func) {
        return 9;
    } 
    return func(9);
}





/* function nums(num) {
    return (nullOrFunc) => {
        if (nullOrFunc===undefined) {
            return num;
        } 
        return nullOrFunc(num);
    }
} */