export function changeBackground(colour) {
    document.body.style.backgroundColor = `${colour}`;
}

export function changeHeading(headingElement, newText) {
    if (!newText) {
        headingElement.innerText = "Default Heading";
        return
    }
    
    headingElement.innerText = newText;
}