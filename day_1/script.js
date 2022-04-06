function alphabetPosition(text) {
    let output = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let character of text.toLowerCase()) {
        let indexNum = alphabet.indexOf(character)+1;
        if (indexNum) {
            output += `${indexNum} `;
        }
    }
    
    return output;
}

console.log(alphabetPosition("abcz"));