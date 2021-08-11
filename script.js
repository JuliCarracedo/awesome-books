/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

class Collection {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('collection')) || [];
  }

  displayBook(book) {
    const newBook = document.createElement('div');
    newBook.innerHTML = `<hr><h3>${book.title}</h3><h3>${book.author}</h3><button id="${i}" onclick="c.removeElement(${i})" >Remove</button>`;
    books[0].appendChild(newBook);
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
