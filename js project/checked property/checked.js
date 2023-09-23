document.getElementById("submitbtn").onclick= function() {
    const checkbox=document.getElementById("mycheckbox")
    if(checkbox.checked) {
        console.log("You are subscribed")
    }
    else{
        console.log("You are not subscibed")
    }
    const mastercardbtn=document.getElementById("mastercardbtn")
    const paypalbtn=document.getElementById("paypalbtn")
    const visabtn=document.getElementById("visabtn")
    if(mastercardbtn.checked){
        console.log("You are paying with a MasterCard")
    }
    else if(paypalbtn.checked){
        console.log("You are paying with a Paypal")
    }
    else if(visabtn.checked){
        console.log("You are paying with a Visa")
    }
    else {
        console.log("You must select a payment type")
    }

}