import { changeImage } from "./src/utils.js";

const button = document.getElementById("button");
const image = document.querySelector("img");

button.addEventListener("click", () => { changeImage(image) });