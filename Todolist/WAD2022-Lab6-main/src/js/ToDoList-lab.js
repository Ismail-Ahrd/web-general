let myNodelist = document.getElementsByTagName("LI")

for (let i = 0; i < myNodelist.length; i++) {
  let btn = document.createElement("button")
  let txt = document.createTextNode("Delete")
  btn.className = "close"
  btn.appendChild(txt)
  myNodelist[i].appendChild(btn)
}

let close = document.getElementsByClassName("close")

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none"
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
      alert("You have to write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    let btn = document.createElement("button");
    let txt = document.createTextNode("Delete");
    btn.className = "close";
    btn.appendChild(txt);
    li.appendChild(btn);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }