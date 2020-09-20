var button = document.getElementById("btn");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

//add delete button to existing list
function deleteButton() {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete"));
  //btn.style.marginBlockStart= "10px";
  btn.style.display = "flex";
  listItems[i].appendChild(btn);
  btn.onclick = remooveParent;
}

for (var i = 0; i < listItems.length; i++) {
  deleteButton();
}

//new list
function createList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  //add delete button to the new list
  var btn1 = document.createElement("button");
  btn1.appendChild(document.createTextNode("Delete"));
  btn1.style.display = "flex";
  li.appendChild(btn1);
  btn1.onclick = remooveParent;
}

function inputLength() {
  return input.value.length;
}

function afterclick() {
  if (inputLength() > 0) {
    createList();
  }
}

function afterPress(event) {
  //after enter press
  if (inputLength() > 0 && event.keyCode === 13) {
    createList();
  }
}
//remove the list item
function remooveParent(event) {
  event.target.parentNode.remove();
}
button.addEventListener("click", afterclick);
button.addEventListener("keypress", afterPress);

/*button.addEventListener("click",  function(){
    console.log("click!!!!!!!!");
});

button.addEventListener("mouseover", function(){
     console.log("mouse over!!!!!!!");
}
)*/
