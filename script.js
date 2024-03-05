let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');


const gencompChoice = () =>{
    let option =["rock","paper","Scissors"];
   const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

    const drawgame =() =>{
        msg.innerText ="game was draw.play again!!";
       msg.style.backgroundColor = " #081b31";
    }

        const showWinner = (userWin,userChoice,compChoice) => {
            if(userWin) {
                userScore ++;
                userScorePara.innerText = userScore;
                msg.innerText =`you win! your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor = "green";

            } else{
                compScore ++;
                compScorePara.innerText = compScore;
                msg.innerText =`you lose. ${compChoice} beats your ${userChoice}`;
                msg.style.backgroundColor = "red";

                
            }
        };



const palygame=(userChoice) =>{
    //geberate compu choice=> moduler 

    const compChoice = gencompChoice()
    console.log("comp Choice=",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawgame();
    }else{
        let userWin =true;
        if(userChoice ==="rock"){
            //scissor paper

         userWin = compChoice === "paper"? false :true;
        }else if (userChoice === "paper"){
            //rock,scissor
           userWin= compChoice === "Scissors" ? false:true;
        }else{
            //rock paper
            userWin = compChoice ==="rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}


choices.forEach((choice) => {
    choice.addEventListener('click',() =>{
        const userChoice= choice.getAttribute("id")
        
        palygame(userChoice);

    })
    
});
// time 39:10