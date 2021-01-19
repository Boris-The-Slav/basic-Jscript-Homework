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

//create the table funciton
function createTable() {
  tableEl.innerHTML = "";
  for (let i = 0; i < Number(rowInput.value) + 1; i++) {
    const newRow = document.createElement("TR");
    const cell = "<td></td>";
    newRow.innerHTML = cell.repeat(Number(colInput.value) + 1);
    console.log(newRow.cells[0]);
    if (i === 0) {
      for (let g = 0; g <= Number(colInput.value); g++) {
        newRow.cells[g].innerText = `Column ${g}`;
      }
    }
    newRow.cells[0].innerText = `Row ${i}`;
    if (newRow.cells[0].innerText === "Row 0") {
      newRow.cells[0].innerText = `Magical
      Table`;
    }
    tableEl.append(newRow);
  }
}
//add event listener
createBtn.addEventListener("click", () => {
  rowInput.value <= 50 &&
  colInput.value <= 50 &&
  rowInput.value > 0 &&
  colInput.value > 0
    ? createTable()
    : (tableEl.innerHTML =
        "<h2>This realm can only work from 1-50, dont try to cheat.</h2>");
});

//create random color function
function createRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
//add color event listener
colorBtn.addEventListener("click", () => {
  tableEl.style.backgroundColor = createRandomColor();
});
