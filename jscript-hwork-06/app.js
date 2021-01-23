console.log("console is working");
//animal object homework

//dom selections
const animalNameInput = document.querySelector("#animal--name--input");
const animalKindInput = document.querySelector("#animal--kind--input");
const animalBtn = document.querySelector("#animal--btn");
const speakInput = document.querySelector("#animal--speak--input");
const displaySpeak = document.querySelector("#print--msg");

//object constructor
function Animal(name, kind) {
  this.name = name;
  this.kind = kind;
  this.speak = function (msg) {
    return `${this.name} was a happy little ${this.kind}and it decided one day to say: ${msg}`;
  };
}
//function for making object and display
function makeAnimal(name, kind) {
  if (name.value && kind.value) {
    const animalObject = new Animal(name.value, kind.value);
    displaySpeak.innerHTML = `<h2>${animalObject.speak(speakInput.value)}</h2>`;
  } else {
    displaySpeak.innerHTML = `<h2>INVALID INPUT</h2>`;
  }
}

//event listener
animalBtn.addEventListener("click", () => {
  makeAnimal(animalNameInput, animalKindInput);
});

//have you read book homework

//dome selections
const bookTitle = document.querySelector("#book--title--input");
const bookAuthor = document.querySelector("#book--author--input");
const isRead = document.querySelector("#check--book");
const bookBtn = document.querySelector("#book--btn");
const bookDisplay = document.querySelector("#print--book");
//object constructor
function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.isRead = readingStatus;
  this.checkRead = function () {
    return readingStatus
      ? `You have read "${this.title}" by ${this.author}`
      : `You still need to read "${this.title}" by ${this.author}`;
  };
}
//function to make object and display
function createBook(title, author, readingStatus) {
  if (title.value && author.value) {
    const bookObject = new Book(
      title.value,
      author.value,
      readingStatus.checked
    );
    bookDisplay.innerHTML = `<h2>${bookObject.checkRead()}</h2>`;
  } else {
    bookDisplay.innerHTML = `<h2>INVALID INPUT</h2>`;
  }
}
//event listener
bookBtn.addEventListener("click", () => {
  createBook(bookTitle, bookAuthor, isRead);
});
