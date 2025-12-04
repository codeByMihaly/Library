let addBtn = document.getElementById("addNew");
let form = document.querySelector(".form");
let deleteBtn = document.querySelectorAll(".delete-btn");
let deleteFormBtn = document.getElementById("delete-form-btn");
let titleName = document.getElementById("title");
let authorName = document.getElementById("author");
let pagesName = document.getElementById("pages");
let submitBtn = document.querySelector(".submit-btn");
let readBtn = document.querySelectorAll(".read-btn");
let b1 = document.getElementById("b1");
let blocks = document.querySelector(".blocks");

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

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  addBookToLibrary();
});

addBtn.addEventListener("click", () => {
  form.hidden = !form.hidden;
});

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

deleteFormBtn.addEventListener("click", function () {
    form.hidden = !form.hidden;
});

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

  if(title === "" || author === "" || pages === "") {
    return alert("You must complete every section!")
  }

  let newBook = new Book(title, author, pages);
  newBook.id = crypto.randomUUID();
  myLibrary.push(newBook);

  let newBlock = b1.cloneNode(true);  
  newBlock.id = newBook.id;

  let para = newBlock.querySelectorAll("p");

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
