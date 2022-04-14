export function randomRoll() {
    return Math.ceil(Math.random()*6);
}

export function changeImage(imageElement) {
    imageElement.src = `./images/${randomRoll()}.png`;
}