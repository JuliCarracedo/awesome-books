"use strict";

// let books = document.getElementsByClassName("books");
var collection = JSON.parse(window.localStorage.getItem('collection')) || []; // let collection = [];
// let submit = document.getElementById("submit")
// let aTitle = document.getElementById("title")
// let anAuthor = document.getElementById("author")
// submit.addEventListener('click', addBook(aTitle, anAuthor))
// function addBook(title, author){
//     console.log("creating" + title)
//     let newBook = document.createElement('div');
//     newBook.innerHTML = '<hr><h3>'+ title + '</h3><h3>'+ author + '</h3><button>Remove</button>';
//     books[0].appendChild(newBook)
//     collection.push({title: title, author: author});
// }

var books = document.getElementsByClassName("books");

for (book in collection) {
  var thisBook = JSON.parse(book);
  var newBook = document.createElement('div');
  newBook.innerHTML = '<hr><h3>' + thisBook["title"] + '</h3><h3>' + thisBook["author"] + '</h3><button>Remove</button>';
  books[0].appendChild(newBook);
}

var form = document.forms[0];
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var book = {
    'title': document.getElementById('title').value,
    'author': document.getElementById('author').value
  };
  collection.push(book);
  window.localStorage.setItem('collection', JSON.stringify(collection));
  displayBook(book);
  console.log(collection);
});

function displayBook(book) {
  var newBook = document.createElement('div');
  newBook.innerHTML = '<hr><h3>' + book.title + '</h3><h3>' + book.author + '</h3><button>Remove</button>';
  books[0].appendChild(newBook);
}

console.log(window.localStorage);