var parent = document.getElementById("bod"),
  button = document.createElement("button");
button.innerHTML = "Remove";

(print = document.createElement("button")), (print.innerHTML = "Print");

print.classList.add("print");

var display = document.getElementById("display"),
  main = document.getElementById("main");

button.classList.add("remove");

button.onclick = () => {
  display.classList.add("delete");
  parent.removeChild(button);
  parent.removeChild(print);

  alert("Entered values are removed");
};

function addInput() {
  var entered = document.getElementById("input").value;

  display.innerHTML = entered;

  parent.appendChild(button);

  parent.appendChild(print);

  alert("Use 'REMOVE' button to delete entered values");
}

function setColor() {
  var uColor = document.getElementById("col").value;
  display.style.color = uColor;
}

function setSize() {
  var uSize = document.getElementById("siz").value;

  display.style.fontSize = uSize;
}

function setStyle() {
  var uStyle = document.getElementById("sty").value;

  display.style.fontFamily = uStyle;
}

function styleBold() {
  display.classList.toggle("bold");
}

function styleUnderline() {
  display.classList.toggle("underline");
}

function styleItalic() {
  display.classList.toggle("italic");
}

function styleArial() {
  display.classList.toggle("arial");
}
