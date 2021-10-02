/*

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

//every time you type it detects it
quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct = true

    arrayQuote.forEach((characterSpan, index) => {

        const character = arrayValue[index]

        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false

        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')

        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })

    if (correct) renderNewQuote()
})


function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
}
renderNewQuote() 
    
*/


const typingDiv = document.getElementById("typing");


const text = `The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).`

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
document.addEventListener("keydown", ({ key }) => {
    console.log(key)
    if (!startTime) {
        startTime = new Date();

    }
    //zdej bomo preverli če je prvi character, ki ga mi napisemo isti kot tist v paragrafu
    if (key === cursorCharacter.innerText) {
        //we typed the correct key

        cursorCharacter.classList.remove('cursor');
        cursorCharacter.classList.add("done");
        cursorCharacter = characters[++cursorIndex];
        cursorCharacter.classList.add("cursor");
    }

    if (cursorIndex >= characters.length) {
        endTime = new Date();
        const delta = endTime - startTime;
        const seconds = delta / 1000;
        const numberOfWords
    }

    //display wpm

});
