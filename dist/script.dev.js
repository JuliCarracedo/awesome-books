"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-unused-vars */

/* eslint-disable no-use-before-define */

/* eslint-disable no-plusplus */

/* eslint-disable no-undef */
var Collection = function Collection() {
  _classCallCheck(this, Collection);

  this.collection = JSON.parse(localStorage.getItem('collection')) || [];
};

var books = document.getElementsByClassName('books');

for (i = 0; i < collection.length; i++) {
  thisBook = collection[i];
  var newBook = document.createElement('div');
  newBook.innerHTML = "<hr><h3>".concat(thisBook.title, "</h3><h3>").concat(thisBook.author, "</h3><button id=\"").concat(i, "\" onclick=\"removeElement(").concat(i, ")\" >Remove</button>");
  books[0].appendChild(newBook);
}

var form = document.forms[0]; // Event listener for the form. Saves input data and tells displayBook() to add a div

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var book = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value
  };
  collection.push(book);
  window.localStorage.setItem('collection', JSON.stringify(collection));
  displayBook(book);
}); // commanded by the Listener, adds a div with a book's data and a remove button

function displayBook(book) {
  var newBook = document.createElement('div');
  newBook.innerHTML = "<hr><h3>".concat(book.title, "</h3><h3>").concat(book.author, "</h3><button>Remove</button>");
  books[0].appendChild(newBook);
} // called by clicking any remove button. Deletes said element


function removeElement(i) {
  collection.splice(i, 1);
  window.localStorage.setItem('collection', JSON.stringify(collection));
  window.location.reload();
}