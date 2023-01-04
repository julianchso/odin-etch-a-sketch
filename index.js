let colorPicker = document.querySelector("#colorPicker");
let gridContainer = document.querySelector(".gridContainer");
let gridSizeInput = document.querySelector("#gridSizeInput").value;
let penColor = document.querySelector("#colorPicker").value;
let squares = document.querySelectorAll(".gridSquare");
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

function activeMode(newSelection) {
  currentSelection = newSelection;
  console.log(currentSelection);
  ActiveBtn(`${newSelection}`);
}

document
  .querySelector("#colorPicker")
  .addEventListener("change", onChangeColor);

updateGrid();

// if (currentSelection == "colorPen") {
//   coloring();
//   console.log("coloring");
// } else if (currentSelection == "eraser") {
//   erasing();
//   console.log("erasing");
// }

function updateGridSize(newGridSize) {
  document.querySelector(
    "#gridSizeLabel"
  ).textContent = `${newGridSize.value} x ${newGridSize.value}`;
  gridSizeInput = newGridSize.value;
  updateGrid();
  // if (currentSelection == "colorPen") {
  //   coloring();
  //   console.log("coloring");
  // } else if (currentSelection == "eraser") {
  //   erasing();
  //   console.log("erasing");
  // }
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
  gridContainer.addEventListener("mousedown", () => {
    gridContainer.addEventListener("mouseover", coloring);
  });
  window.addEventListener("mouseup", () => {
    gridContainer.removeEventListener("mouseover", coloring);
  });
}

if (currentSelection == "eraser") {
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
  e.target.style["background-color"] = penColor;
}

function erasing(e) {
  e.target.style["background-color"] = transparent;
}

function clearAll(e) {
  squares.forEach((square) => {
    console.log("clear")
    square.style["background-color"] = transparent;
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

clearBtn.addEventListener("click", clearAll);
