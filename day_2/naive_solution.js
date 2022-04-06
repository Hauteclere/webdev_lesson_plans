let plus = (number) => {
    return "plus", number;
}

let minus = (number) => {
    return "minus", number;
}

let times = (number) => {
    return ("times", number);
}

let dividedBy = (number) => {
    return "dividedBy", number;
}

let zero = (...args) => {
    switch (args[0]) {
        case "plus":
            return 0 + args[1];
        case "minus":
            return 0 - args[1];
        case "times":
            return 0 * args[1];
        case "divide":
            return ~~0 / args[1];
        default:
            return 0;
    }
}

let one = (...args) => {
    switch (args[0]) {
        case "plus":
            return 1 + args[1];
        case "minus":
            return 1 - args[1];
        case "times":
            return 1 * args[1];
        case "divide":
            return ~~1 / args[1];
        default:
            return 1;
    }
}

let two = (...args) => {
    switch (args[0]) {
        case "plus":
            return 2 + args[1];
        case "minus":
            return 2 - args[1];
        case "times":
            return 2 * args[1];
        case "divide":
            return ~~2 / args[1];
        default:
            return 2;
    }
}

let three = (...args) => {
    switch (args[0]) {
        case "plus":
            return 3 + args[1];
        case "minus":
            return 3 - args[1];
        case "times":
            return 3 * args[1];
        case "divide":
            return ~~3 / args[1];
        default:
            return 3;
    }
}

let four = (...args) => {
    switch (args[0]) {
        case "plus":
            return 4 + args[1];
        case "minus":
            return 4 - args[1];
        case "times":
            return 4 * args[1];
        case "divide":
            return ~~4 / args[1];
        default:
            return 4;
    }
}

let five = (...args) => {
    switch (args[0]) {
        case "plus":
            return 5 + args[1];
        case "minus":
            return 5 - args[1];
        case "times":
            return 5 * args[1];
        case "divide":
            return ~~5 / args[1];
        default:
            return 5;
    }
}

let six = (...args) => {
    switch (args[0]) {
        case "plus":
            return 6 + args[1];
        case "minus":
            return 6 - args[1];
        case "times":
            return 6 * args[1];
        case "divide":
            return ~~6 / args[1];
        default:
            return 6;
    }
}

let seven = (...args) => {
    switch (args[0]) {
        case "plus":
            return 7 + args[1];
        case "minus":
            return 7 - args[1];
        case "times":
            return 7 * args[1];
        case "divide":
            return ~~7 / args[1];
        default:
            return 7;
    }
}

let eight = (...args) => {
    switch (args[0]) {
        case "plus":
            return 8 + args[1];
        case "minus":
            return 8 - args[1];
        case "times":
            return 8 * args[1];
        case "divide":
            return ~~8 / args[1];
        default:
            return 8;
    }
}

let nine = (...args) => {
    switch (args[0]) {
        case "plus":
            return 9 + args[1];
        case "minus":
            return 9 - args[1];
        case "times":
            return 9 * args[1];
        case "divide":
            return ~~9 / args[1];
        default:
            return 9;
    }
}