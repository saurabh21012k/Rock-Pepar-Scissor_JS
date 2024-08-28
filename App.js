let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score"); 


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
   // console.log("Game was Draw");
    msg.innerText = "Game Draw!! :";
    msg.style.backgroundColor ="rgb(109, 107, 107)"
}

const showWinner = (userWin , userChoice, CompChoice) =>{
    if(userWin){
        //console.log("You Won!! :)");
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You Won!! :) Your ${userChoice} beats Computer's ${CompChoice}` 
        msg.style.backgroundColor ="Green"
    } else{
        //console.log("You Loss!! :(");
        CompScore++;
        compScorePara.innerText = CompScore;
        msg.innerText = `You Lost!! :( Computer's ${CompChoice} beats Your ${userChoice}`
        msg.style.backgroundColor ="red"
    }
}

const playGame = (userChoice) => {
    //console.log("user choice = ", userChoice);

    const CompChoice = genCompChoice();
    //console.log("comp choice = ", CompChoice)

    if (userChoice === CompChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true ;
        if(userChoice === "rock"){
            //scissor , paper
            userWin = CompChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //scissor , rock
            userWin = CompChoice === "scissor" ? false : true;
        }else{
            //rock , paper
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , CompChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});