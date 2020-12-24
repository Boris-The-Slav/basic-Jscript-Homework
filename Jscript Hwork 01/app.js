//global variables
const numberPhones = 30
const phonePrice = 119.95
const tax = 5
const calculatedTax = (phonePrice / 100) * tax
const adjustedPrice = phonePrice + calculatedTax
const totalNoTax = phonePrice * numberPhones
const totalWithTax = adjustedPrice * numberPhones
//dom selection
display = document.querySelector("#header")
display2 = document.querySelector("#noTax")
display3 = document.querySelector("#withTax")

//print results on screen
display.innerText = `The total price of ${numberPhones} phones priced ${phonePrice} is:`
display2.innerText = `${totalNoTax} without the 5% tax added.`
display3.innerText = `${totalWithTax} with the 5% tax added.`
