export function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

export function changeHeading(element, newText) {
    if (!newText) {
        element.innerText = "Default Heading";
        return;
    }

    element.innerText = newText;
}