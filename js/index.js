const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');
const submitBtn = document.getElementById('submit');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
  myLibrary.push(book);
}

submitBtn.addEventListener('click', () => {
  addBookToLibrary();
  console.log(myLibrary);
});
