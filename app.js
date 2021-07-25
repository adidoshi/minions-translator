const userInput = document.querySelector("#input-txt");
const btn = document.querySelector("#btn");
const display = document.querySelector(".container");

btn.addEventListener("click", funcbtn);

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function difInput(text) {
    return serverURL + "?" + "text=" + text;
}

function funcbtn() {
    let input = userInput.value;
    fetch(difInput(input))
        .then((response) => response.json())
        .then((data) => {
            display.innerText = data.contents.translated;
        })
        .catch((error) => console.log("error occured " + error));
}