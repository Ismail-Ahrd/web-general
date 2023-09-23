const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn=document.querySelector(".btn")
const color=document.getElementById("color")

btn.addEventListener("click", function() {
    let randomNum=0
    let hexColor="#"
    for(let i=0;i<6;i++){
        randomNum=getRundomNum()
        hexColor+=hex[randomNum]
    }
    document.body.style.backgroundColor=hexColor
    color.textContent=hexColor
})



function getRundomNum() {
    return Math.floor(Math.random()*hex.length)
}