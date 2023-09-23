let firstName = "Ismail"
let age=20
let student=true
document.getElementById("p1").innerHTML="Hello "+firstName
document.getElementById("p2").innerHTML="You are "+age
document.getElementById("p3").innerHTML="Enrolled: "+student

let userName=window.prompt("what's you're name?")
console.log(userName)

let username
document.getElementById("myButton").onclick = function(){
    username=document.getElementById("myText").value
    console.log(username)
    document.getElementById("text1").innerHTML="hello "+username+"!"
}