// let books = document.getElementsByClassName("books");
let collection = [];

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
let books = document.getElementsByClassName("books");

for (book in collection) {
    let newBook = document.createElement('div');
    newBook.innerHTML = '<hr><h3>'+ book.title + '</h3><h3>'+ book.author + '</h3><button>Remove</button>';
    books[0].appendChild(newBook);
}
  
let form = document.forms[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let book = {
        'title' : document.getElementById('title').value,
        'author' : document.getElementById('author').value
    };
    collection.push(book);
    window.localStorage.setItem('collection', collection);
    displayBook(book);
    console.log(collection);

});

function displayBook(book) {
    let newBook = document.createElement('div');
    newBook.innerHTML = '<hr><h3>'+ book.title + '</h3><h3>'+ book.author + '</h3><button>Remove</button>';
    books[0].appendChild(newBook);
}
console.log(window.localStorage)


