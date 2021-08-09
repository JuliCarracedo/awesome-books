"use strict";

// let books = document.getElementsByClassName("books");
// let collection = []
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
var newBook = [];

function addBook() {
  var book = {};
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  displayBook();
  saveBook();
  newBook.push(book);
}

function displayBook() {
  var list = document.getElementById('list');
  list.innerHTML = '';
}