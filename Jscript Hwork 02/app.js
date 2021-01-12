console.log("works")

//Chinese New Year Code 

//dom selections
const newYearInput = document.querySelector("#newYearInput")
const newYearBtn = document.querySelector("#newYearBtn")
const newYearResult = document.querySelector("#newYearResult")
//global variables
const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
//button event listener
newYearBtn.addEventListener("click", () => {
    let year = parseInt(newYearInput.value)
    if (!Number.isNaN(year)) {
        let calculatedYear = (year - 4) % 12
        //function for results  
        function newYearFunction(result) {
            newYearResult.innerText = `The Zodiac for year: ${year} is ${animals[result]}`
        }
        //print result
        newYearFunction(calculatedYear)
        newYearInput.value = ""
    } else {
        //print invalid input
        newYearResult.innerText = "INVALID YEAR"
        setTimeout(() => {
            newYearResult.innerText = ""
        }, 1500);
    }
})
//I know i probbably should have used something like a switch statement
//but a function looked much more nicer and efficient. if i have to redo the thing 
//with a switch statement please say so in the feedback thx guys.


//Celsius to Fahrenheit Converter 

//dom selections

const temperatureInput = document.querySelector("#temperatureInput")
const celsuisToF = document.querySelector("#celsiusToF")
const fahrenheitToC = document.querySelector("#fahrenheitToC")
const convertTemp = document.querySelector("#convertTemp")

//function to convert
function temperatureConversion(temp) {
    let fahrenheit = (temp * 9 / 5) + 32
    let celsius = (temp - 32) * 5 / 9
    fahrenheit = +fahrenheit.toFixed(4)
    celsius = +celsius.toFixed(4)
    celsuisToF.innerText = `${temp} Celsius is ${fahrenheit} Fahrenheit`
    fahrenheitToC.innerText = `${temp} Fahrenheit is ${celsius} Celsius`
    temperatureInput.value = ""
}
//event listener
convertTemp.addEventListener("click", () => {
    const temperature = parseFloat(temperatureInput.value)
    if (!Number.isNaN(temperature)) {
        temperatureConversion(temperature)
    } else {
        celsuisToF.innerText = "INVALID NUMBER"
        fahrenheitToC.innerText = ""
        setTimeout(() => {
            celsuisToF.innerText = ""
            temperatureInput.value = ""
        }, 1500);
    }
})

//AGE CALCULATOR

//dom selections
const birthYearInput = document.querySelector("#birthYear")
const ageBtn = document.querySelector("#ageBtn")
const ageResult = document.querySelector("#ageResult")

//get current year 
const fullDate = new Date()
const currYear = fullDate.getFullYear()

//Calculator Function
function invalidInput() {
    ageResult.innerText = `Take this seriously`
    setTimeout(() => {
        birthYearInput.value = ""
        ageResult.innerText = ""
    }, 1500);
}
function calcAge(birth) {
    const birthYear = parseInt(birth)
    if (!Number.isNaN(birthYear)) {
        if (currYear <= birthYear) {
            invalidInput()
        } else {
            ageResult.innerText = `You were born in ${birthYear} and you are ${currYear - birthYear} years old`
            birthYearInput.value = ""
        }
    } else {
        invalidInput()
    }
}
//event listener
ageBtn.addEventListener("click", () => {
    calcAge(birthYearInput.value)
})

//typoof checker

//dom selections
const checkType = document.querySelector("#checkType")
const typeList = document.querySelector("#typeList")
//global variables
const array = ["Boris", 123, undefined, null, true]
//checker function 
function typeChecker(el) {
    const type = (typeof el)
    return type;
}
//event listner and print on screen logic
checkType.addEventListener("click", () => {
    for (element of array) {
        const li = document.createElement("LI")
        li.innerText = `"${element}" type is ${typeChecker(element)}`
        typeList.append(li)
    }
}, { once: true })

//DOG AGE CALCULATOR

//dom selections
const dogAge = document.querySelector("#dogAge")
const dogAgeConverted = document.querySelector("#dogAgeConverted")
const convertToDog = document.querySelector("#convertToDog")
const convertToHuman = document.querySelector("#convertToHuman")
//global variables
let dogYears = true
//convert function
function convertYears(age) {
    const parsedAge = parseFloat(age)
    if (!Number.isNaN(parsedAge)) {
        if (dogYears) {
            dogAgeConverted.innerText = `Your Dog is ${parsedAge} Human Years old and ${parsedAge * 7} Dog Years old.`
            dogAge.value = ""
        } else {
            let humanAge = parsedAge / 7
            humanAge = +humanAge.toFixed(1)
            dogAgeConverted.innerText = `Your Dog is ${parsedAge} Dog Years old and ${humanAge} Human Years old.`
            dogAge.value = ""
        }
    } else {
        dogAgeConverted.innerText = "INVALID AGE"
        setTimeout(() => {
            dogAgeConverted.innerText = ""
            dogAge.value = ""
        }, 1500);
    }
}
//event listers 
convertToDog.addEventListener("click", () => {
    dogYears = true
    convertYears(dogAge.value)
})
convertToHuman.addEventListener("click", () => {
    dogYears = false
    convertYears(dogAge.value)
})

//ATM MACHINE

//dom selections
const totalCash = document.querySelector("#totalCash")
const withdrawCash = document.querySelector("#withdrawCash")
const ammountWithdrawn = document.querySelector("#ammountWithdrawn")
const ammountLeft = document.querySelector("#ammountLeft")
const cashBtn = document.querySelector("#cashBtn")
//global variables
let total = 1000
totalCash.innerText = ` ${total}$`
//cash function
function manipulateCash(cash) {
    const parsedCash = parseInt(cash)
    if (!Number.isNaN(parsedCash)) {
        if (total < parsedCash) {
            ammountWithdrawn.innerText = "NOT ENOUGH FUNDS"
            ammountLeft.innerText = ""
            setTimeout(() => {
                ammountWithdrawn.innerText = ""
                withdrawCash.value = ""
            }, 1500);
        } else {
            ammountWithdrawn.innerText = `You withdrew ${parsedCash}$`
            total = total - parsedCash
            totalCash.innerText = `${total}$`
            ammountLeft.innerText = `You have ${total}$ remaining`
            withdrawCash.value = ""
            setTimeout(() => {
                ammountWithdrawn.innerText = ""
                ammountLeft.innerText = ""
                withdrawCash.value = ""
            }, 2500);
        }
    } else {
        ammountWithdrawn.innerText = "INVALID NUMBER"
        ammountLeft.innerText = ""
        setTimeout(() => {
            ammountWithdrawn.innerText = ""
            withdrawCash.value = ""
        }, 1500);
    }
}
//event listeners
cashBtn.addEventListener("click", () => {
    manipulateCash(withdrawCash.value)
    console.log("operational")
})