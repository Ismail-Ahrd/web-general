const choices=["rock","paper","scissors"]
const possibleChoices=[document.getElementById("rock"),document.getElementById("paper"),document.getElementById("scissors")]
const userChoiceDisplay=document.getElementById("user-choice")
const computerChoiceDisplay=document.getElementById("computer-choice")
const resultDesplay=document.getElementById("result")
let userChoice
let computerChoice
let result


possibleChoices.forEach(choice => choice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    let i =Math.floor(Math.random()*3)
    computerChoice=choices[i]
    computerChoiceDisplay.innerHTML=computerChoice
}


function getResult(){
    if (userChoice===computerChoice){
        result="It's a draw!"
    }
    for(let i=0;i<3;i++){
        if (i===2) j=0
        else j=i+1
        if (userChoice===choices[i] && computerChoice===choices[j]){
            result="You lose!"
        }else if (userChoice===choices[j] && computerChoice===choices[i]){
            result="You win!"
        }
    }
    resultDesplay.innerHTML=result
}