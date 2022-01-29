var a= document.querySelector("#one")
var squares = document.querySelectorAll("td")

// Function for clearing the squares
function test(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent=" "
  }
}
// calling the fucntion
a.addEventListener("click",test);
// function for adding X O or " "
function changeMaker(){
  if (this.textContent===" "){
    this.textContent="X";
  }else if (this.textContent==="X") {
    this.textContent="O";
  }else {
    this.textContent=" ";
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click",changeMaker)
}
