document.body.onload = addElement;

function addElement() {
 
  const newDiv = document.createElement("div");
 
  const newContent = document.createTextNode("Cheese!");
 
  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}