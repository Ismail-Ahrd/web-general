const nbr=Math.floor(Math.random()*10+1)
let guesses=0
document.getElementById("submitbtn").onclick= function(){
    let guess=document.getElementById("guessField").value
    guesses+=1
    if(guess==nbr){
        alert(`${guess} is the number. It took you ${guesses} guesses`)
    }
    else if(guess<nbr){
        alert("too small!")
    }
    else{
        alert("too large!")
    }
}