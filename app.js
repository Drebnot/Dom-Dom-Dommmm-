// When the browser first loads, use the DOM to create and insert a button labeled Add Square into the body

document.addEventListener("DOMContentLoaded", button);
function button() {
    //create button
    let button = document.createElement("button");
    //add button text
    let btnText =  document.createTextNode("Add square!");
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
    square.className = "the-squares";
    id++;
    square.id = id;
    var p = document.createElement("p");
    var squareText = document.createTextNode(id);
    p.appendChild(squareText);
    square.appendChild(p);
    document.body.appendChild(square);
})

}

