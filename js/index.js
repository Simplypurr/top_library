/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
const submitBtn = document.getElementById('submit');
const inputs = Array.from(document.querySelectorAll('input[type=text]'));
const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const testBook = new Book('Harry Potter', 'Joann Rowling', '692', 'yes');
myLibrary.push(testBook);

function emptyFieldsChecker() {
  const errMsg = document.querySelector('.inputs');
  if (inputs.map((field) => field.value.length === 0).includes(true)) {
    errMsg.classList.add('error');
    return false;
  }
  errMsg.classList.remove('error');
  return true;
}

function addBookToLibrary() {
  if (!emptyFieldsChecker()) {
    return;
  }
  const newBook = new Book(...inputs.map((field) => field.value));
  myLibrary.push(newBook);
  inputs.forEach((field) => field.value = '');
}

submitBtn.addEventListener('click', (e) => {
  addBookToLibrary();
  e.preventDefault();
  console.log(myLibrary);
});
