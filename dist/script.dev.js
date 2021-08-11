"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */

/* eslint-disable no-unused-vars */

/* eslint-disable no-use-before-define */

/* eslint-disable no-plusplus */

/* eslint-disable no-undef */
var colorNum = 0;

var Collection =
/*#__PURE__*/
function () {
  function Collection() {
    _classCallCheck(this, Collection);

    this.collection = JSON.parse(localStorage.getItem('collection')) || [];
  }

  _createClass(Collection, [{
    key: "displayBook",
    value: function displayBook(book) {
      var newBook = document.createElement('div');
      newBook.innerHTML = "<p>\"".concat(book.title, "\" by ").concat(book.author, "</p>\n    <button class=\"fixed-h\" id=\"").concat(i, "\" onclick=\"c.removeElement(").concat(i, ")\" >Remove</button>");
      newBook.classList.add('d-flex', 'justify-content-between', 'container', 'fixed-w');

      if (colorNum % 2 === 0) {
        newBook.classList.add('bg-gray');
      }

      books[0].appendChild(newBook);
      colorNum++;
    }
  }, {
    key: "removeElement",
    value: function removeElement(i) {
      c.collection.splice(i, 1);
      window.localStorage.setItem('collection', JSON.stringify(c.collection));
      window.location.reload();
    }
  }]);

  return Collection;
}();

c = new Collection();
var books = document.getElementsByClassName('books');

for (i = 0; i < c.collection.length; i++) {
  thisBook = c.collection[i];
  c.displayBook(thisBook);
}

var form = document.forms[0];
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var book = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value
  };
  c.collection.push(book);
  window.localStorage.setItem('collection', JSON.stringify(c.collection));
  c.displayBook(book);
});