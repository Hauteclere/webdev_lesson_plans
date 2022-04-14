import { changeBackgroundColor, changeHeading } from "./src/utils.js";

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const heading = document.querySelector("h1");
const textInput = document.querySelector("input");

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        changeBackgroundColor(body, button.id);
    });
}

textInput.addEventListener("input", (event) => {
    changeHeading(heading, event.target.value);
});