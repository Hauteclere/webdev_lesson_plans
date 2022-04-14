const button = document.getElementById("button");

function logEvent(event) {
    console.log(event);
}

button.addEventListener("click", (event) => { logEvent(event) });