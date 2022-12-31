let colorPicker = document.querySelector("#colorPicker");
let gridContainer = document.querySelector(".gridContainer");
let gridSize = document.querySelector("#gridSize").value;

console.log(gridSize);

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(".gridSquare");

    gridContainer.appendChild(newDiv);
  }
}
