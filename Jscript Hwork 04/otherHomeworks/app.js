console.log('it worketh')

//homework02 - print an array

//dom selections
const arrayContainer = document.querySelector("#arrayContainer")
const arrayBtn = document.querySelector("#arrayBtn")
const arraySizeInput = document.querySelector("#arraySizeInput")
//creating a random number array
const numberArray = []
function fillRandomNumbers(num) {
    for (let i = 0; i < num; i++) {
        let randomNumber = Math.floor((Math.random()) * (num * 10)) + 1
        numberArray.push(randomNumber)
    }
}

//print on screen function
const printArray = (array, element) => {
    //sum variable
    let result = 0
    //creaate list 
    const newList = document.createElement("OL")
    element.append(newList)
    for (let num of array) {
        result += num
        const listElement = document.createElement("LI")
        listElement.innerText = `Value is ${num}`
        newList.append(listElement)
    }
    element.innerHTML += `<p>The total sum of the above numbers is ${result}</p>`
    //bonus part
    element.innerHTML += `The Mathematical equation is (${numberArray.join(" + ")}) = ${result}`

}
//button event listener
arrayBtn.addEventListener("click", () => {
    const inputNumber = Number(arraySizeInput.value)
    console.log(inputNumber)
    if (inputNumber <= 30 && inputNumber > 0) {
        //resetting with each click
        arrayContainer.innerHTML = ""
        fillRandomNumbers(inputNumber)
        printArray(numberArray, arrayContainer)
        //resetting the array and the input
        arraySizeInput.value = ""
        numberArray.splice(0, numberArray.length)

    } else {
        //error message if the number is bigger than 30
        arrayContainer.innerHTML = "<h2>INVALID INPUT (MAX SIZE IS 30)</h2>"
        setTimeout(() => {
            arraySizeInput.value = ""
            arrayContainer.innerHTML = ""
        }, 2000);
    }
})

//homework03 - recipe

//dom selections 

//inputs
const recipeTitleInput = document.querySelector("#recipeTitleInput")
const ingredientCount = document.querySelector("#ingredientCount")
const ingredientTitle = document.querySelector("#igredientTitle")
const ingredientAmmount = document.querySelector("#igredientAmmount")
//buttons
const createRecipe = document.querySelector("#createRecipe")
const addIgredient = document.querySelector("#addIngredient")
const resetRecipe = document.querySelector("#resetRecipe")
//display elements
const recipeTitle = document.querySelector("#recipeTitle")
const ingredientNumber = document.querySelector("#ingredientNumber")
const listContainer = document.querySelector("#listContainer")
const tableContainer = document.querySelector("#tableContainer")


//disabled state function
const disabledState = (bool) => {
    recipeTitleInput.disabled = bool
    ingredientCount.disabled = bool
    createRecipe.disabled = bool
    ingredientTitle.disabled = !bool
    ingredientAmmount.disabled = !bool
    addIgredient.disabled = !bool
}
disabledState(false)
//function to create recipe title and igredient count
const createTitle = (title, number, element, element02) => {
    element.innerText = title
    element02.innerText = `Ingredients: ${number}`
    disabledState(true)
}

//event listener for crating title and list
createRecipe.addEventListener("click", () => {
    if (recipeTitleInput.value !== "" && ingredientCount.value !== "" && Number(ingredientCount.value) > 0) {
        createTitle(recipeTitleInput.value, Number(ingredientCount.value), recipeTitle, ingredientNumber)
    } else {
        recipeTitle.innerText = "INVALID INPUT"
        setTimeout(() => {
            recipeTitle.innerText = ""
        }, 1500);
    }
})

//Creating the list and table
const newList = document.createElement("UL")
listContainer.append(newList)
const newTable = document.createElement("TABLE")
tableContainer.append(newTable)


//function to display the ingredients
const makeIngredient = (title, ammount) => {
    const listElement = document.createElement("LI")
    listElement.innerText = `${ammount} ${title}.`
    newList.append(listElement)
    const newRow = document.createElement("TR")
    const cell01 = document.createElement("TD")
    const cell02 = document.createElement("TD")
    cell01.innerText = title
    cell02.innerText = ammount
    if (ammount === "") {
        newRow.append(cell01)
        cell01.colSpan = "2"
    } else {
        newRow.append(cell01)
        newRow.append(cell02)
    }
    newTable.append(newRow)
}

//event listner
let count = 0
addIgredient.addEventListener("click", () => {
    if (Number(ingredientCount.value) > count) {
        if (ingredientTitle.value !== "") {
            makeIngredient(ingredientTitle.value, ingredientAmmount.value)
            ingredientTitle.value = ""
            ingredientAmmount.value = ""
            count++
        } else {
            ingredientTitle.value = ""
            ingredientAmmount.value = ""
        }
    } else {
        ingredientTitle.value = "LIMIT REACHED"
        ingredientAmmount.value = "RESET RECIPE"
    }

})

//reset function
const reset = () => {
    count = 0
    disabledState(false)
    ingredientTitle.value = "LIMIT REACHED"
    ingredientAmmount.value = "RESET RECIPE"
    ingredientTitle.value = ""
    ingredientAmmount.value = ""
    listContainer.innerHTML = ""
    tableContainer.innerHTML = ""
    recipeTitleInput.value = ""
    ingredientCount.value = ""
    recipeTitle.innerText = ""
    ingredientNumber.innerText = ""

}
//reset even listener
resetRecipe.addEventListener("click", () => {
    reset()
})