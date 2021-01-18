console.log("working");

//inputs
const rowInput = document.querySelector("#row--input");
const colInput = document.querySelector("#col--input");

//buttons
const createBtn = document.querySelector("#create--btn");
const colorBtn = document.querySelector("#color--btn");

//elements
const tableEl = document.querySelector("#table--element");
const magicMsg = document.querySelector("#magic--msg");

let allTd = [];
//create the table funciton
function createTable() {
  for (let i = 0; i < Number(rowInput.value); i++) {
    const newRow = document.createElement("TR");
    for (let j = 0; j < Number(colInput.value); j++) {
      const newCell = document.createElement("TD");
      newRow.append(newCell);
    }
    if (i === 0) {
      for (let g = 0; g < Number(colInput.value); g++) {
        newRow.cells[g].innerText = `Column ${g}`;
        newRow.cells[0].innerText = "TABLE";
      }
    }
    newRow.cells[0].innerText = `Row ${i}`;
    console.log(newRow.cells[0].innerText);
    if (newRow.cells[0].innerText === "Row 0") {
      newRow.cells[0].innerText = `Magical
      Table`;
    }
    tableEl.append(newRow);
  }
}
//add event listener
createBtn.addEventListener("click", () => {
  createTable();
});

//create random color function

Math.floor(Math.random() * 256);
function createRandom(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

colorBtn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  tableEl.style.backgroundColor = createRandom(red, green, blue);
});
