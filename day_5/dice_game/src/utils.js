export function randomNumber() {
    return Math.ceil(Math.random()*6);
}

export function changeImgSrc(imageElement) {
    imageElement.src = `./images/${randomNumber()}.png`;
}

