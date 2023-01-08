let colorPicker = document.querySelector("#colorPicker");
let gridContainer = document.querySelector(".gridContainer");
let gridSizeInput = document.querySelector("#gridSizeInput").value;
let penColor = document.querySelector("#colorPicker").value;
let squares;
let toolsBtns = document.querySelectorAll(".toolsBtn");
let clearBtn = document.querySelector("#clearBtn");
let newDiv;

let currentSelection = "colorPen";

let colorPen = document.querySelector("#colorPen");
let randomRainbowPen = document.querySelector("#randomRainbowPen");
let eraser = document.querySelector("#eraser");

colorPen.addEventListener("click", () => {
  activeBtn("colorPen");
});

randomRainbowPen.addEventListener("click", () => {
  activeBtn("randomRainbowPen");
});

eraser.addEventListener("click", () => {
  activeBtn("eraser");
});

clearBtn.addEventListener("click", clearAll);

function activeMode(newSelection) {
  ActiveBtn(`${newSelection}`);
  currentSelection = newSelection;
}

document
  .querySelector("#colorPicker")
  .addEventListener("change", onChangeColor);

updateGrid();

function updateGridSize(newGridSize) {
  document.querySelector(
    "#gridSizeLabel"
  ).textContent = `${newGridSize.value} x ${newGridSize.value}`;
  gridSizeInput = newGridSize.value;
  updateGrid();
}

function updateGrid() {
  gridContainer.innerHTML = "";

  gridContainer.style.gridTemplateColumns = `repeat(${gridSizeInput}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSizeInput}, 1fr)`;

  for (let i = 0; i < gridSizeInput; i++) {
    for (let j = 0; j < gridSizeInput; j++) {
      newDiv = document.createElement("div");
      newDiv.classList.add("gridSquare");
      gridContainer.appendChild(newDiv);
    }
  }
}

gridContainer.addEventListener("mousedown", () => {
  gridContainer.addEventListener("mouseover", coloring);
});
window.addEventListener("mouseup", () => {
  gridContainer.removeEventListener("mouseover", coloring);
});

gridContainer.addEventListener("mousedown", () => {
  gridContainer.addEventListener("mouseover", erasing);
});
window.addEventListener("mouseup", () => {
  gridContainer.removeEventListener("mouseover", erasing);
});

gridContainer.addEventListener("mousedown", () => {
  gridContainer.addEventListener("mouseover", rainbowPen);
});
window.addEventListener("mouseup", () => {
  gridContainer.removeEventListener("mouseover", rainbowPen);
});

function onChangeColor() {
  penColor = this.value;
}

function coloring(e) {
  if (
    e.target.classList.contains("gridSquare") &&
    currentSelection == "colorPen"
  ) {
    console.log(`coloring()`);
    e.target.style["background-color"] = penColor;
  }
}

function erasing(e) {
  console.log(`erasing function: ${currentSelection}`);
  if (
    e.target.classList.contains("gridSquare") &&
    currentSelection == "eraser"
  ) {
    console.log(`erasing()`);
    e.target.style["background-color"] = "transparent";
  }
}

function rainbowPen(e) {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  if (
    e.target.classList.contains("gridSquare") &&
    currentSelection == "randomRainbowPen"
  ) {
    e.target.style["background-color"] = `rgb(${red}, ${green}, ${blue})`;
  }
}

function clearAll() {
  squares = document.querySelectorAll(".gridSquare");

  squares.forEach((square) => {
    console.log("clear: inner loop");
    square.style["background-color"] = "transparent";
  });
}

function activeBtn(newSelection) {
  currentSelection = newSelection;

  eraser.classList.remove("ActiveBtn");
  colorPen.classList.remove("ActiveBtn");
  randomRainbowPen.classList.remove("ActiveBtn");

  if (newSelection == "colorPen") {
    colorPen.classList.add("ActiveBtn");
  } else if (newSelection == "randomRainbowPen") {
    randomRainbowPen.classList.add("ActiveBtn");
  } else if (newSelection == "eraser") {
    eraser.classList.add("ActiveBtn");
  }
  console.log(newSelection);
}
