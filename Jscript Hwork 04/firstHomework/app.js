//homework01 - change elementrs

const paragraphs = document.querySelectorAll("p")
const header1 = document.querySelectorAll("h1")
const header3 = document.querySelector("h3")
const changeBtn = document.querySelector("#changeElements")
//event listener

changeBtn.addEventListener("click", () => {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerText = "PARAGRAPHS CHANGED"
        header1[i].innerText = "HEADER ONE CHANGED"
    }
    header3.innerText = "HEADER THREE CHANGED"
})



