/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const collection = JSON.parse(localStorage.getItem('collection')) || [];

const books = document.getElementsByClassName('books');

for (i = 0; i < collection.length; i++) {
  thisBook = collection[i];
  const newBook = document.createElement('div');
  newBook.innerHTML = `<hr><h3>${thisBook.title}</h3><h3>${thisBook.author}</h3><button id="${i}" onclick="removeElement(${i})" >Remove</button>`;
  books[0].appendChild(newBook);
}

const form = document.forms[0];

// Event listener for the form. Saves input data and tells displayBook() to add a div
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const book = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  };
  collection.push(book);

  window.localStorage.setItem('collection', JSON.stringify(collection));
  displayBook(book);
});

// commanded by the Listener, adds a div with a book's data and a remove button
function displayBook(book) {
  const newBook = document.createElement('div');
  newBook.innerHTML = `<hr><h3>${book.title}</h3><h3>${book.author}</h3><button>Remove</button>`;
  books[0].appendChild(newBook);
}

// called by clicking any remove button. Deletes said element
function removeElement(i) {
  collection.splice(i, 1);
  window.localStorage.setItem('collection', JSON.stringify(collection));
  window.location.reload();
}
