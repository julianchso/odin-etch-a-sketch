let colorPicker = document.querySelector("#colorPicker");
let gridContainer = document.querySelector(".gridContainer");
let gridSize = document.querySelector("#gridSize").value;

function updateGridSize(newGridSize) {
  document.querySelector(
    "#gridSizeLabel"
  ).textContent = `${newGridSize.value} x ${newGridSize.value}`;
  gridSize = newGridSize.value;
  console.log(gridSize);
  updateGrid();
}

function updateGrid() {
  gridContainer.innerHTML = ""

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

  console.log(`updateGrid function: ${gridSize}`);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("gridSquare");

      gridContainer.appendChild(newDiv);
    }
  }
  console.log("Grid updated");
}
