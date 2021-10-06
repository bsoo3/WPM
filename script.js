const typingDiv = document.getElementById("typing");


const pharagraphs = [
    `The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).`,
    `The Rocker is a 2008 American comedy film directed by Peter Cattaneo and written by Maya Forbes and Wallace Wolodarsky, from a story by Ryan Jaffe.`,
    `It was easy to spot her. All you needed to do was look at her socks. They were never a matching pair. One would be green while the other would be blue.`,
    `It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. `,
    `Don't be scared. The things out there that are unknown aren't scary in themselves.`,
    `The box sat on the desk next to the computer. It had arrived earlier in the day and business had interrupted her opening it earlier.`,
    `The cab arrived late. The inside was in as bad of shape as the outside which was concerning, and it didn't appear that it had been cleaned in months.`,
    `The leather jacked showed the scars of being his favorite for years. It wore those scars with pride, feeling that they enhanced his presence rather than diminishing it.`,
    `It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system.`,
    `One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat.Som`,
    `Samantha wanted to be famous. The problem was that she had never considered all the downsides to actually being famous.`,
    `Love isn't always a ray of sunshine. That's what the older girls kept telling her when she said she had found the perfect man.`,
    `She never liked cleaning the sink. It was beyond her comprehension how it got so dirty so quickly.`,
    `Sometimes it's just better not to be seen. That's how Harry had always lived his life.`,
    `We can all fight against loneliness by engaging in random acts of kindness.`,
    `Goals transform a random walk into a chase.`,
    `Sometimes in life, random things can blind-side you.`,
    `The world is governed by chance. Randomness stalks us every day of our lives.`,
    `The amount of random conversations that lead to culture-shifting ideas is insane.`,
    `These random unkind moment that catch you wen you least expect them.`,
    `We are born by accident into a purely random universe`,
    `The generation of random numbers is too important to be left to chance.`,
    `The fool doth think he is wise, but the wise man knows himself to be a fool.`,
    `What is a friend? A single soul dwelling in two bodies.`,
    `Are you always so stupid or is today a special ocassion?`,
    `Keep your eyes on the stars and your feet on the ground`,
    `Roses are red, violets are blue, sugar is sweet and so are you!`,
];

const text = pharagraphs[parseInt(Math.random() * pharagraphs.length)];

const characters = text.split("").map(char => {

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


    if (key === cursorCharacter.innerText) {
        cursorCharacter.classList.remove("cursor");
        cursorCharacter.classList.add("true");
        cursorCharacter = characters[++cursorIndex];
    }


    if (cursorIndex >= characters.length) {
        const endTime = new Date();
        const delta = endTime - startTime;
        const seconds = delta / 1000;
        const numberOfWords = text.split(" ").length;
        const wps = numberOfWords / seconds;
        const wpm = wps * 60.0;
        document.getElementById("wpm").innerText = `wpm = ${parseInt(wpm)}`;
        document.removeEventListener("keydown", keyListener);
        return;
    }

    cursorCharacter.classList.add("cursor");
});
