const colors=['red', 'green', 'Rgba(133,122,200)','#f15025']
const btn=document.querySelector(".btn")
const color=document.getElementById("color")

btn.addEventListener("click", function () {
    let randomNum=getRundomNum()
    document.body.style.backgroundColor=colors[randomNum]
    color.textContent=colors[randomNum]
})


function getRundomNum() {
    return Math.floor(Math.random()*colors.length)
}