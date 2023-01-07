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
  activeMode("colorPen");
});

randomRainbowPen.addEventListener("click", () => {
  activeMode("randomRainbowPen");
});

eraser.addEventListener("click", () => {
  activeMode("eraser");
});

clearBtn.addEventListener("click", clearAll);

function activeMode(newSelection) {
  currentSelection = newSelection;
  ActiveBtn(`${newSelection}`);
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

if (currentSelection == "colorPen") {
  console.log(`${currentSelection}`);
  gridContainer.addEventListener("mousedown", () => {
    gridContainer.addEventListener("mouseover", coloring);
  });
  window.addEventListener("mouseup", () => {
    gridContainer.removeEventListener("mouseover", coloring);
  });
}

if (currentSelection == "eraser") {
  console.log(`addeventlistener: ${currentSelection}`);

  gridContainer.addEventListener("mousedown", () => {
    gridContainer.addEventListener("mouseover", erasing);
  });
  window.addEventListener("mouseup", () => {
    gridContainer.removeEventListener("mouseover", erasing);
  });
}

function onChangeColor() {
  penColor = this.value;
}

function coloring(e) {
  if (
    e.target.classList.contains("gridSquare") &&
    currentSelection == "colorPen"
  ) {
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

function clearAll() {
  squares = document.querySelectorAll(".gridSquare");

  squares.forEach((square) => {
    console.log("clear: inner loop");
    square.style["background-color"] = "transparent";
  });
}

function ActiveBtn(newSelection) {
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
}
