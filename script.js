let addBtn = document.getElementById("addNew");
let form = document.querySelector(".form");
let titleName = document.getElementById("title");
let authorName = document.getElementById("author");
let pagesName = document.getElementById("pages");
let b1 = document.getElementById("b1");
let blocks = document.querySelector(".blocks");

/* Read button toggle */
let readBtn = document.querySelectorAll(".read-btn");

readBtn.forEach(btn => {
  btn.addEventListener("click", function() {
    if(this.textContent === "Not done!") {
    this.textContent = "Done!";
    this.style.backgroundColor = "green";
    this.style.color = "white";
    } else {
    this.textContent = "Not done!";
    this.style.backgroundColor = "#000066";
    this.style.color = "#add8e6";
    }
  });
});

/* Add book action */
let submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  addBookToLibrary();
});

/* Input gonna pop up */

addBtn.addEventListener("click", () => {
  form.hidden = !form.hidden;
});

/* Delete button action */
let deleteBtn = document.querySelectorAll(".delete-btn");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

/* Form x */
let deleteFormBtn = document.getElementById("delete-form-btn");

deleteFormBtn.addEventListener("click", function () {
    form.hidden = !form.hidden;
});

/* Library container */

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let title = titleName.value;
  let author = authorName.value;
  let pages = pagesName.value;

  /* Must fill every input */

  if(title === "" || author === "" || pages === "") {
    return alert("You must complete every section!")
  }

  let newBook = new Book(title, author, pages);
  newBook.id = crypto.randomUUID();
  myLibrary.push(newBook);

  let newBlock = b1.cloneNode(true);  
  newBlock.id = newBook.id;

  let para = newBlock.querySelectorAll("p");

  /* Add text content to the new block */

  para[1].textContent = `Title: ${newBook.title}`;
  para[2].textContent = `Author: ${newBook.author}`;
  para[3].textContent = `Pages: ${newBook.pages}`;

  newBlock.querySelector(".delete-btn").addEventListener("click", function() {
    newBlock.remove();
  })
  newBlock.querySelector(".read-btn").addEventListener("click", function() {
    if(this.textContent === "Not done!") {
    this.textContent = "Done!";
    this.style.backgroundColor = "green";
    this.style.color = "white";
    } else {
    this.textContent = "Not done!";
    this.style.backgroundColor = "#000066";
    this.style.color = "#add8e6";
    }
  });

  blocks.appendChild(newBlock);

  titleName.value = "";
  authorName.value = "";
  pagesName.value = "";

  form.hidden = true;
}
