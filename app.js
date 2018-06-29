// When the browser first loads, use the DOM to create and insert a button labeled Add Square into the body

document.addEventListener("DOMContentLoaded", button);
function button() {
  //create button
  let button = document.createElement("button");
  //add button text
  let btnText = document.createTextNode("Add square!");
  //set button class
  button.className = "button";
  //put text in button
  button.appendChild(btnText);
  //put button in body
  document.body.appendChild(button);
  //create id counter
  let id = 0;


  button.addEventListener("click", function blackSquare() {
    var square = document.createElement("div");
    var p = document.createElement("p");
    square.className = "the-squares";
    id++;
    square.id = id;
    var squareText = document.createTextNode(id);
    p.appendChild(squareText);
    square.appendChild(p);
    document.body.appendChild(square);
    // When hovering over a square, the value of the square's id should display centered in the square, and disappear when the cursor is no longer over the square
    p.style.opacity = "0";
    square.addEventListener("mouseenter", function hover() {
      p.style.opacity = "1";
    })
    square.addEventListener("mouseleave", function noHover() {
      p.style.opacity = "0";
    })

    // When a square is clicked, it should change to a random background color
    square.addEventListener("click", function randomColor() {
      var num = Math.floor(Math.random() * 6);
      if (num === 0) {
        square.style.backgroundColor = "red";
      } else if (num === 1) {
        square.style.backgroundColor = "green";
      } else if (num === 2) {
        square.style.backgroundColor = "blue";
      } else if (num === 3) {
        square.style.backgroundColor = "purple";
      } else if (num === 4) {
        square.style.backgroundColor = "orange";
      } else if (num === 5) {
        square.style.backgroundColor = "pink";
      }
    })
    square.addEventListener("dblclick", function squareDoubleClick() {
      if (square.id % 2 === 0) {
        let squareID = parseInt(square.id) + 1;
        let next = document.getElementById(squareID);
        if (next == null) {
          alert("Square with ID " + squareID + " does not exist.")
        } else {
          next.parentNode.removeChild(next);
        }
      } else {
        let squareID = parseInt(square.id) - 1;
        let next = document.getElementById(squareID);
        if (next == null) {
          alert("Square with ID " + squareID + " does not exist.")
        } else {
          next.parentNode.removeChild(next);
        }
      }
    })
  })
}
