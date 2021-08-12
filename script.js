/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
let colorNum = 0;

const books = document.getElementsByClassName('books');
const listDiv = document.getElementById('list-div');
const addDiv = document.getElementById('add-div');
const contactDiv = document.getElementById('contact-div');
const list = document.getElementById('list');
const add = document.getElementById('add');
const contact = document.getElementById('contact');

add.addEventListener('click', (event) => {
  addDiv.classList.remove('d-none');
  listDiv.classList.add('d-none');
  contactDiv.classList.add('d-none');
});

list.addEventListener('click', (event) => {
  listDiv.classList.remove('d-none');
  addDiv.classList.add('d-none');
  contactDiv.classList.add('d-none');
});

contact.addEventListener('click', (event) => {
  contactDiv.classList.remove('d-none');
  listDiv.classList.add('d-none');
  addDiv.classList.add('d-none');
});

const form = document.forms[0];

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

  toList() {

  }

  toAdd() {

  }
}

c = new Collection();

for (i = 0; i < c.collection.length; i++) {
  thisBook = c.collection[i];
  c.displayBook(thisBook);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const book = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  };
  c.collection.push(book);

  window.localStorage.setItem('collection', JSON.stringify(c.collection));
  c.displayBook(book);
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});
