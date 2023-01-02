let colorPicker = document.querySelector("#colorPicker");
let gridContainer = document.querySelector(".gridContainer");
let gridSizeInput = document.querySelector("#gridSizeInput").value;
let penColor = document.querySelector("#colorPicker").value;
let squares = document.querySelectorAll(".gridSquare");
let toolsBtns = document.querySelectorAll(".toolsBtn");
let clear = document.querySelector("#clear");

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
      let newDiv = document.createElement("div");
      newDiv.classList.add("gridSquare");

      gridContainer.appendChild(newDiv);
    }
  }
  squares = document.querySelectorAll(".gridSquare");
  console.log(squares);
}

function onChangeColor() {
  penColor = this.value;
}

squares.forEach((square) => {
  square.addEventListener("click", function () {
    square.style["background-color"] = penColor;
    console.log("click");
  });
});

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

toolsBtns.forEach((toolsBtn) => {
  toolsBtn.addEventListener("click", function () {
    console.log("click tool");
    toolsBtn.classList.remove("buttonActive");
    this.classList.add("buttonActive");
  });
});

// clear.addEventListener("click", clearAll())

function clearAll() {}
