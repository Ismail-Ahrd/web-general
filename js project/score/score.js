let contH=0
let contG=0
let currentpointHome=document.getElementById("currentpointHome")
let currentpointGuest=document.getElementById("currentpointGuest")
function plusOneHome(){
    contH+=1
    currentpointHome.textContent=contH
}
function plusTwoHome(){
    contH+=2
    currentpointHome.textContent=contH
}
function plusThreeHome(){
    contH+=3
    currentpointHome.textContent=contH
}
function plusOneGuest(){
    contG+=1
    currentpointGuest.textContent=contG
}
function plusTwoGuest(){
    contG+=2
    currentpointGuest.textContent=contG
}
function plusThreeGuest(){
    contG+=3
    currentpointGuest.textContent=contG
}