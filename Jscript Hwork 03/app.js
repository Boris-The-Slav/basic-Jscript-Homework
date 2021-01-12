//homework01 - tell a story

const exampleStory = ["Boris", "focused", "writing homework"]

function tellStory(array) {
    return `This is ${array[0]}. ${array[0]} is a student at the SEDC Academy.
    This morning ${array[0]} is ${array[1]}. They will be ${array[2]} until all of it is done.`
}

tellStory(exampleStory)

//homework02 - sum of 5 numbers

const validNumberArray = [32, 20, 40, 20, 54]
const invalidNumberArray = [23, "Stone", null, 1323, "Potato"]
function doSum(array) {
    let result = 0
    for (number of array) {
        if (isNaN(number)) {
            return "Error Invalid Number"
        }
        result += number
    }
    return result
}

doSum(validNumberArray)

//homework03 - concat array elements

const stringsArray = ["It", "has", "been", "raining", "nonstop", "for", "days."]
//using the join method
function joinArray(array) {
    const bigString = array.join(" ")
    return bigString
}
joinArray(stringsArray)
//using a loop
function joinArrayLoop(array) {
    let bigString = ""
    for (element of array) {
        bigString += `${element} `
    }
    return bigString
}
joinArrayLoop(stringsArray)

//homework04 - new line with even numbers.

function newLineLoop() {
    for (let i = 1; i <= 20; i++) {
        console.log(i)
        if (i % 2 === 0) {
            console.log(`\n`)
        }
        // else {sa
        //     console.log(" ")
        // }
    }
}
newLineLoop()
//guys if i add an else statement here that adds a " " then the result is
//a new line after every number in the console. Is this the intended way
//of doing this homework or maybe i'm misunderstanding something

//homework05 - MIN and MAX numbers

const minMaxArray = [13, 56, 32, 11, 3, 11, 333, 5]
const mixedArray = [13, "another string", 56, 32, 11, 3, "string", 11, 333, 5]

//using no loops - more efficient but doesnt work with other types of data
function minMaxSum(array) {
    const max = Math.max(...array)
    const min = Math.min(...array)
    const result = max + min
    console.log(result)
    return result
}
minMaxSum(minMaxArray)

//using a loop
function minMaxSumLoop(array) {
    let max = 0
    let min = array[0]

    for (number of array) {
        if (number > max) {
            max = number
        }
        if (min > number) {
            min = number
        }
    }
    const result = min + max
    console.log(result)
    return result
}
minMaxSumLoop(minMaxArray)
minMaxSumLoop(mixedArray)

//homework06 - first and last name joiner

const firstNames = ["Tommy", "Bobby", "Tony", "Carmine", "Mikey"]
const lastNames = ["Vincetti", "Pantangeli", "Soprano", "Falcone", "Moretti"]

function nameCreator(namearray, surnamearray) {
    const fullNames = []
    for (let i = 0; i < namearray.length; i++) {
        const fullName = `${i + 1}. ${namearray[i]} ${surnamearray[i]}`
        fullNames.push(fullName)
    }
    console.log(fullNames)
    return fullNames
}
nameCreator(firstNames, lastNames)