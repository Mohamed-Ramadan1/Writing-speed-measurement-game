// Catch Selectors
let startButton = document.querySelector(".start");
    lvlNameSpan = document.querySelector(".message .lvl"),
    secondsSpan = document.querySelector(".message .seconds"),
    theWord = document.querySelector(".the-word"),
    upcomingWords = document.querySelector(".upcoming-words"),
    input = document.querySelector(".input"),
    timeLeftSpan = document.querySelector(".time span"),
    scoreGot = document.querySelector(".score .got"),
    scoreTotal = document.querySelector(".score .total"),
    finishMessage = document.querySelector(".finish");



// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// Setting Levels
const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
};

let defultLeverName = "Normal";
let defultLevelSecond = lvls[defultLeverName];

lvlNameSpan.innerHTML = defultLeverName;
secondsSpan.innerHTML = defultLevelSecond;
timeLeftSpan.innerHTML = defultLevelSecond;
scoreTotal.innerHTML = words.length; 

// disable past event
input.onpaste = () => false;


// the start Game
startButton.onclick = function() {
    this.remove();
    input.focus();
    genrateWords()
};

function genrateWords() {
    let randomWrod = words[Math.floor(Math.random() * words.length)];
    let wrodIndex = words.indexOf(randomWrod);
    words.splice(wrodIndex, 1);
    theWord.innerHTML = randomWrod;

    upcomingWords.innerHTML = "";

    //Genrate wrods
    for (let i = 0; i < words.length; i++){

        let div = document.createElement("div");
        let divText = document.createTextNode(words[i]);

        div.appendChild(divText);
        upcomingWords.appendChild(div)
    }

    startPlay();
}

function startPlay() {
    timeLeftSpan.innerHTML = defultLevelSecond;

    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            clearInterval(start);

            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = "";
                scoreGot.innerHTML++;

                if (words.length > 0) {
                    genrateWords();

                } else {
                    let span = document.createElement("span");
                    span.className = "good";
                    let spanText = document.createTextNode("Congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    
                    upcomingWords.remove();

                    }

            } else {
                let span = document.createElement("span");
                span.className = "bad";
                let spanText = document.createTextNode("Game Over");

                span.appendChild(spanText);
                finishMessage.appendChild(span);

            }

        }
    },1000)
}