userScore = 0;
compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
   
}
const showWinner = (userWin ,userChoice, compChoice) => {
    if(userWin ){
        msg.innerText = `Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        msg.innerText = `${compChoice} beats yours${userChoice}` ;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}
const drawgame = () =>{
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
}

const playgame = (userChoice) =>{
     //Generate computer choice
     const compChoice =genCompChoice();
     if(userChoice === compChoice){
        drawgame();
     } else {
        let userWin = true;
        if (userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true ;
        }else if (userChoice === "paper"){
           userWin = compChoice === "scissors" ? false : true;
        } else {
            //scissors
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice ,compChoice);
     }
 
}




choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
})

let btn = document.createElement("button");
btn.id = "rstBtn";
 btn.innerHTML = "Reset";
 document.body.appendChild(btn);


 btn.addEventListener("click" , () =>{
    userScore = 0;
    compScore = 0;
   compScorePara.innerText = compScore;
   userScorePara.innerText = compScore;
   msg.innerText = "Play Your move";
   msg.style.backgroundColor = "#081b31";
 })
