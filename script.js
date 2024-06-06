
let body = document.querySelector("body")
let modes = document.querySelector("#modes")
let currMode = "light"

modes.addEventListener("click", function () {
    if (currMode === "light") {
        currMode = "black"
        body.style.backgroundColor="black"
        modes.innerText="light mode"
    } else {
        currMode = "light"
        body.style.backgroundColor=" #2e1448"
        modes.innerText="dark mode"
    }        
})  

//gam3
let player = "first";
let result = document.querySelector("#result");
const restartButton = document.querySelector(".restart");
let boxes = document.querySelectorAll(".boxes");
let container = document.querySelector("#gameContainer")
let heading = document.querySelector("#heading")
let boxesArray = Array.from(boxes);
let gameWon = false;
winner = "x"

boxesArray.forEach(function(box) {
    box.addEventListener("click", function () {
        if (!gameWon && box.innerText === "") {
            if (player === "first") {
                heading.innerText="O turn"
                heading.setAttribute("id", "Oturn")
                box.innerText = "X";
                box.style.textShadow = "1px -1px 8px #005cfbdb"
                player = "second";

            } else if (player === "second") {
                box.innerText = "O";
                heading.innerText="X turn"
                heading.setAttribute("id", "Xturn")
                box.style.textShadow = "rgb(255 12 0) 0px 2px 9px";
                player = "first";
            }
            checkWin();
        }
    });
});

function checkWin() {
    const winPatterns = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (boxesArray[a].innerText !== "" && boxesArray[a].innerText === boxesArray[b].innerText && 
            boxesArray[b].innerText === boxesArray[c].innerText) {
            gameWon = true;

            if (boxesArray[a].innerText === "X") {
                heading.innerText="X won 🏆";
                winner = "xPLayer"
                heading.setAttribute("id", "Xturn")
            } else {
                heading.innerText="O won 🏆";
                winner = "oPLayer"
                heading.setAttribute("id", "Oturn")
            }
        }
    });

    if (!gameWon && boxesArray.every(box => box.innerText !== "")) {
        heading.innerText = "DRAW! 🤝";
        heading.setAttribute("id", "heading")
    }

    
if (gameWon || heading.innerText === "DRAW! 🤝") {
    restartButton.classList.remove("disappear");
} else {
    restartButton.classList.add("disappear");
}


}


function restart() {
    gameWon = false;

   if (winner === "xPLayer") {
    player = "first"
    heading.innerText = "X turn";
    heading.setAttribute("id", "Xturn");
   } else {
    player = "second"
    heading.innerText = "O turn";
    heading.setAttribute("id", "Oturn");
   }
    
    boxesArray.forEach(function(box) {
        box.innerText = "";
    });

}

backBtn = document.querySelector("#back")
backBtn.addEventListener("click", function() {
    window.close()
})

function playGame() {
    document.querySelector("#startingBox").style.visibility="hidden"
    var audio = document.getElementById('myAudio');
    audio.muted = false;
    audio.play();
    audio.volume = 1.0;
}