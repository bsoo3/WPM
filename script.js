const typingDiv = document.getElementById("typing");


const text = `The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon(alternating directions).`


const characters = text.split('').map(char => {

    //besedilo splittamo v span kjer je vsaka crka zapisana posebej
    const span = document.createElement("span")
    span.innerText = char;
    typingDiv.appendChild(span);
    return span;
});

let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];

cursorCharacter.classList.add("cursor");

let startTime = null;
let endTime = null;

//zazna ko napisemo 1. crko
const keyListener = document.addEventListener("keydown", ({ key }) => {

    if (!startTime) {
        startTime = new Date();
    }

    //zdej bomo preverli če je prvi character, ki ga mi napisemo isti kot tist v paragrafu
    let correct = true;

    if (key === cursorCharacter.innerText) {
        //we typed the correct key
        cursorCharacter.classList.remove("cursor");
        cursorCharacter.classList.add("done");
        cursorCharacter = characters[++cursorIndex];
    }

    if (cursorIndex >= characters.length) {
        const endTime = new Date();
        const delta = endTime - startTime;
        const seconds = delta / 1000;
        const numberOfWords = text.split(" ").length;
        const wps = numberOfWords / seconds;
        const wpm = wps * 60.0;
        document.getElementById("stats").innerText = `wpm = ${parseInt(wpm)}`;
        document.removeEventListener("keydown", keyListener);
        return;
    }

    cursorCharacter.classList.add("cursor");
});
