function firstNonRepeatingLetter(inputString) {
    let lowerString = inputString.toLowerCase();
    let checked = {}
    
    for (const [index, char] of Array.from(lowerString).entries()) {
        if (!checked[char]) {
            if (lowerString.lastIndexOf(char) === index) {
                return inputString[index];
            } else {
                checked[char] = true;
            }
        } 
    }
    return "";
}

