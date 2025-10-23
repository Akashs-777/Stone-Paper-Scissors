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
    console.log(`Game was draw`);
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
}

const playgame = (userChoice) =>{
     console.log(`user choice =  ${userChoice}`);
     //Generate computer choice
     const compChoice =genCompChoice();
     console.log(`comp choice = ${compChoice}`);

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
