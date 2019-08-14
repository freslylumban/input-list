let input = document.getElementById("input1");
let add = document.getElementById("button-add");
let textIn = document.getElementById("your-input");


add.addEventListener("click", myFunc1);
function myFunc1() {
  let a = document.createElement("div");
  a.setAttribute("class", "add-input")
  let b = input.value;
  let text = document.createTextNode(b);
  a.appendChild(text);
  if (b === "") {
    alert("Input must be filled out");
    return false;
  } else {
    textIn.appendChild(a);
  }
  input.value = "";
}


textIn.addEventListener("click", myFunc2);
function myFunc2(e) {
  e.target.remove();
  // console.log(e);
}