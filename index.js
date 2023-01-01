let colorPicker = document.querySelector("#colorPicker");
let gridContainer = document.querySelector(".gridContainer");
let gridSize = document.querySelector("#gridSize").value;
let penColor = document.querySelector("#colorPicker").value;
let squares = document.querySelectorAll(".gridSquare");
document
  .querySelector("#colorPicker")
  .addEventListener("change", onChangeColor);

updateGrid();

function updateGridSize(newGridSize) {
  document.querySelector(
    "#gridSizeLabel"
  ).textContent = `${newGridSize.value} x ${newGridSize.value}`;
  gridSize = newGridSize.value;
  updateGrid();
}

function updateGrid() {
  gridContainer.innerHTML = "";

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
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
