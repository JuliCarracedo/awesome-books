/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
let colorNum = 0;

class Collection {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('collection')) || [];
  }

  displayBook(book) {
    const newBook = document.createElement('div');
    newBook.innerHTML = `<p>"${book.title}" by ${book.author}</p>
    <button class="fixed-h" id="${i}" onclick="c.removeElement(${i})" >Remove</button>`;
    newBook.classList.add('d-flex', 'justify-content-between', 'container', 'fixed-w');
    if (colorNum % 2 === 0) {
      newBook.classList.add('bg-gray');
    }
    books[0].appendChild(newBook);
    colorNum++;
  }

  removeElement(i) {
    c.collection.splice(i, 1);
    window.localStorage.setItem('collection', JSON.stringify(c.collection));
    window.location.reload();
  }
}

c = new Collection();

const books = document.getElementsByClassName('books');

for (i = 0; i < c.collection.length; i++) {
  thisBook = c.collection[i];
  c.displayBook(thisBook);
}

const form = document.forms[0];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const book = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  };
  c.collection.push(book);

  window.localStorage.setItem('collection', JSON.stringify(c.collection));
  c.displayBook(book);
});
