let contain = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector(".btn");
let winSelect = document.querySelector(".win");
let msgBtn = document.querySelector(".msg");
let gameBtn = document.querySelector(".gmbtn")

let ternO = true; // playerX, player O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


contain.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        console.log("box was clicked");
        // box er click korle ja dekte chai
        //boxes.innerText="0";

        if (ternO) {
            boxes.innerText = "X";
            ternO = false;
        }
        else {
            boxes.innerText = "O";
            ternO = true;
        }
        boxes.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    ternO = true;
    enableBoxes();
    winSelect.classList.add("hidden");
};


const enableBoxes = () => {
    for(let box of contain)
    {
        box.disabled = false; 
        box.innerText = "";
    }
};

const disabledBoxes = () => {
    for(let box of contain)
    box.disabled = true;
}

const showWinner = (Winner) => {
    msgBtn.innerText = `Congratulations,Winner is ${Winner}`;
    winSelect.classList.remove("hidden");
    disabledBoxes();
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = contain[pattern[0]].innerText;
        let pos2Val = contain[pattern[1]].innerText;
        let pos3Val = contain[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }

     if ([...contain].every(box => box.innerText !== "")) {
        msgBtn.innerText = "It's a Draw!";
        winSelect.classList.remove("hidden");
    }
};

resetBtn.addEventListener("click",resetGame);
gameBtn.addEventListener("click",resetGame);

