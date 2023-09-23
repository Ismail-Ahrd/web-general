document.getElementById("submitbutton").onclick = function(){
    let a=document.getElementById("aside").value
    let b=document.getElementById("bside").value
    a=Number(a)
    b=Number(b)
    let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
    document.getElementById("clabel").innerHTML= "Side c ="+c

}