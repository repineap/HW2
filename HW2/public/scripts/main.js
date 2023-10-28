function getRandomInt() {
    return Math.ceil(10*Math.random());
}

function clearText() {
    const cardBody = document.querySelector(".card-body");
    cardBody.innerHTML = "";
}

function processText(text) {
    const regex = /([\.])/g;
    return text.replace(regex, "!!!\n");
}

function textToArray(text) {
    return textArray = text.split("\n");
}

function appendText(textArray) {
    const cardBody = document.querySelector(".card-body");
    let newInnerText = cardBody.innerHTML;
    for (text of textArray) {
        let currentText = `<span style="display:block">${text}</span>`;
        newInnerText += currentText;
    }
    cardBody.innerHTML = newInnerText
}

function updateClient() {
    const cardBody = document.querySelector(".card-body");
    let id = getRandomInt();
    console.log(id);
    clearText();
    fetch(`https://64486933e7eb3378ca2e0f51.mockapi.io/api/users/${id}`)
    .then(response => response.json())
    .then(data => {
        const cardImg = document.getElementById("clientImg");
        cardImg.setAttribute("src", data.avatar);
        cardBody.innerHTML = `<h1 class="card-text" id="clientName">${data.name}</h1>`;
        console.log(data.message);
        let message = processText(data.message);
        message = textToArray(message);
        appendText(message);
    });
}

const testButton = document.getElementById("testButton");
testButton.addEventListener("click", updateClient);
updateClient();