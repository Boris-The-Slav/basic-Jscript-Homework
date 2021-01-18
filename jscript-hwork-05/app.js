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
    for (let j = 0; j < Number(colInput.value) + 1; j++) {
      const newCell = document.createElement("TD");
      newRow.append(newCell);
    }
    if (i === 0) {
      for (let g = 0; g <= Number(colInput.value); g++) {
        newRow.cells[g].innerText = `Column ${g}`;
        newRow.cells[0].innerText = "TABLE";
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
  rowInput.value < 50 && colInput.value < 50
    ? createTable()
    : (tableEl.innerHTML =
        "<h2>THE MAGICAL TABLE WAS SURELY NOT THAT LARGE</h2>");
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
