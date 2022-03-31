function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    for (let character of text.toLowerCase()) {
        let indexNum = alphabet.indexOf(character)+1;
        if (indexNum) {
            output += `${indexNum} `;
        }
    }
    return output.trim();
}
