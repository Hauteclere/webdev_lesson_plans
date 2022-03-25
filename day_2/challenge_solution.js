function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    for (let character of text.toLowerCase()) {
        let indexNum = alphabet.indexOf(character)+1;
        console.log(indexNum);
        if (indexNum) {
            output += `${indexNum} `;
        }
    }
    return output.trim();
}
alphabetPosition(":.,")