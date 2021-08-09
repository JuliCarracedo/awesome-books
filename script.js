let books = document.getElementsByClassName("books");
let collection = []

let submit = document.getElementById("submit")
let aTitle = document.getElementById("title")
let anAuthor = document.getElementById("author")

submit.addEventListener('click', addBook(aTitle, anAuthor))

function addBook(title, author){
    console.log("creating" + title)
    let newBook = document.createElement('div');
    newBook.innerHTML = '<hr><h3>'+ title + '</h3><h3>'+ author + '</h3><button>Remove</button>';
    books[0].appendChild(newBook)
    collection.push({title: title, author: author});
}
