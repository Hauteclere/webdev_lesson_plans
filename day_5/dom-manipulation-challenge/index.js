import { changeBackground, changeHeading } from "./src/utils.js";

const buttons = document.querySelectorAll("button");
const heading = document.querySelector("h1");
const textInput = document.querySelector("input");

for (let button of buttons) {
    button.addEventListener("click", () => {
        changeBackground(button.id);    
    });
}

textInput.addEventListener("input", (event) => {
    changeHeading(heading, event.target.value);
});

